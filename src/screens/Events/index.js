import React, {useState, useEffect, useContext, memo} from 'react';
import {View} from 'react-native';
import {GlobalContext} from '../../context/Provider';

import Events from '../../components/Events';
import EventCard from '../../components/common/EventCard';
import Loading from '../../components/common/Loading';
import NoEvent from '../../components/common/NoEvent';
import getEvent from '../../context/actions/events/getEvent';
import addUserEvent from '../../context/actions/userEvents/addUserEvent';
import getUser from '../../context/actions/profile/getUser';
import auth from '@react-native-firebase/auth';
import PushNotification from 'react-native-push-notification';

const events = () => {
  const [items, setItems] = useState();
  const [mounted, setMounted] = useState(true);

  const {
    eventState: {events, loading},
    userState: {user},
    userEventState: {
      getUserEvent: {data},
    },
    eventDispatch,
    userDispatch,
    userEventDispatch,
  } = useContext(GlobalContext);

  const userInfo = auth().currentUser;

  useEffect(() => {
    if (mounted) {
      getEvent(eventDispatch);
      getUser(`${userInfo.email}`)(userDispatch);
    }

    return () => setMounted(false);
  }, []);

  // useEffect(() => {
  //   if (items === null) {
  //     loadItems();
  //   }
  // }, [items]);

  const handleNotification = item => {
    PushNotification.localNotificationSchedule({
      channelId: 'events-channel',
      message: item.name,
      title: ` Upcoming Event (${item.timeStart})`,
      date: new Date(
        new Date(
          Date.parse(`${item.date}T${item.timeStart}:00+07:00`),
        ).getTime() -
          15 * 60 * 1000,
      ),
      allowWhileIdle: true,
    });
  };

  const loadItems = () => {
    const reduced = events.reduce((acc, currentItem) => {
      acc[currentItem.date] = acc[currentItem.date] || [];
      acc[currentItem.date].push(currentItem);
      return acc;
    }, {});

    setItems(reduced);
  };

  const clickListener = item => {
    addUserEvent({
      studentId: user.id,
      eventId: item.id,
      date: item.date,
      timeStart: item.timeStart,
      timeEnd: item.timeEnd,
      name: item.name,
      organizer: item.organizer,
      location: item.location,
      guests: item.guests,
    })(userEventDispatch);
  };

  const renderItem = item => {
    {
      return (
        <EventCard
          organizer={item.organizer}
          eventName={item.name}
          guests={item.guests}
          location={item.location}
          _class={item._class}
          faculty={item.faculty}
          timeStart={item.timeStart}
          timeEnd={item.timeEnd}
          onPress={() => {
            clickListener(item);
            handleNotification(item);
          }}
          disabled={data.some(obj => obj.id === item.id)}
        />
      );
    }
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  return (
    <View style={{height: '90%'}}>
      <Events
        renderItem={item => renderItem(item)}
        items={items}
        renderEmptyData={() => <NoEvent />}
        // loadItems={loadItems}
        // futureScrollRange={10}
        rowHasChanged={rowHasChanged}
      />
    </View>
  );
};

export default memo(events);
