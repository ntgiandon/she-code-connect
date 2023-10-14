import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  COMMUNITY,
  EVENTS,
  HANDBOOK,
  PROFILE,
  SETTINGS,
} from '../../constants/routeNames';
import HandbookNavigtor from '../../navigations/HandbookNavigator';
import Profile from '../../screens/Profile';
import Settings from '../../screens/Logout';
import Events from '../../screens/Events';
import Social from '../../screens/Social';

export default function tabNavBar({route, navigation}) {
  const viewRef = React.useRef(null);
  const [page, setPage] = useState();

  useEffect(() => {
    switch (route.name) {
      case EVENTS:
        setPage(<Events />);
        break;

      case COMMUNITY:
        setPage(<Social />);
        break;

      case HANDBOOK:
        setPage(<HandbookNavigtor />);
        break;

      case PROFILE:
        setPage(<Profile />);
        break;

      case SETTINGS:
        setPage(<Settings />);
        break;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({0: {opacity: 0.5}, 1: {opacity: 1}});
    });
    return () => unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Animatable.View ref={viewRef} easing={'ease-in-out'} style={{flex: 1}}>
        {route.name && page}
      </Animatable.View>
    </View>
  );
}
