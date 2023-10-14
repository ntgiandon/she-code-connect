import React, {useContext, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import ModalCard from '../../components/common/ModalCard';
import UserCard from '../../components/common/UserCard';
import Loading from '../../components/common/Loading';
import {GlobalContext} from '../../context/Provider';
import getUserEvent from '../../context/actions/userEvents/getUserEvent';
import updateUserEvent from '../../context/actions/userEvents/updateUserEvent';
import deleteUserEvent from '../../context/actions/userEvents/deleteUserEvent';
import {windowWidth} from '../../utils/Dimetions';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ModalAlert from '../../components/common/ModalAlert';

const index = React.memo(({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [alert, setAlert] = useState(false);
  const [mounted, setMounted] = useState(true);
  const [items, setItems] = useState({});

  const ITEM_HEIGHT = windowWidth;

  const [layoutProvider] = useState(
    new LayoutProvider(
      index => 1,
      (type, dim) => {
        dim.width = ITEM_HEIGHT;
        dim.height = 350;
      },
    ),
  );

  layoutProvider.shouldRefreshWithAnchoring = false;

  const provider = useMemo(() => {
    return new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
  }, []);

  const {
    userEventState: {
      getUserEvent: {data, loading},
    },
    userState: {user},
    userEventDispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (mounted) {
      getUserEvent({studentId: user.id})(userEventDispatch);
    }
    return () => setMounted(false);
  }, []);

  const events = data.filter(data => data.isParticipated == false);

  const dataProvider = useMemo(() => {
    return provider.cloneWithRows(events);
  }, [events, provider]);

  const rowRenderer = (type, data) => {
    return (
      <UserCard
        id={data.id}
        name={data.name}
        timeStart={data.timeStart}
        timeEnd={data.timeEnd}
        date={data.date}
        location={data.location}
        onPress={() => {
          setItems(data);
          setModalVisible(true);
        }}
        pressDelete={() => {
          setItems(data);
          setAlert(true);
        }}
      />
    );
  };

  return (
    <View>
      {loading && <Loading />}
      <ModalCard
        name={items.name}
        organizer={items.organizer}
        eventName={items.name}
        guests={items.guests}
        location={items.location}
        _class={items._class}
        faculty={items.faculty}
        timeStart={items.timeStart}
        date={items.date}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        closeModal={() => setModalVisible(false)}
        isParticipated={() => {
          updateUserEvent({studentId: user.id, eventId: items.id})(
            userEventDispatch,
          );
          setModalVisible(!modalVisible);
        }}
        note={() => {
          navigation.navigate('CreateNote', {
            title: items.name,
            organizer: items.organizer,
            id: items.id,
          });
          setModalVisible(!modalVisible);
        }}
      />

      <ModalAlert
        animationType="fade"
        notification="Are you sure you want to this event?"
        transparent={true}
        visible={alert}
        onRequestClose={() => setAlert(!alert)}
        closeModal={() => setAlert(false)}
        pressOk={() => {
          deleteUserEvent({studentId: user.id, eventId: items.id})(
            userEventDispatch,
          );
          setAlert(false);
        }}
        pressCancel={() => setAlert(false)}
      />
      {events.length > 0 && (
        <View
          style={{
            width: '100%',
            height: '92%',
            display: 'flex',
          }}>
          <RecyclerListView
            style={{flex: 1, flexDirection: 'column'}}
            layoutProvider={layoutProvider}
            dataProvider={dataProvider}
            rowRenderer={rowRenderer}
            disableRecycling={true}
            onEndReachedThreshold={1}
            renderAheadOffset={0}
            scrollViewProps={{showsVerticalScrollIndicator: false}}
            forceNonDeterministicRendering={true}
          />
        </View>
      )}
    </View>
  );
});

export default index;
