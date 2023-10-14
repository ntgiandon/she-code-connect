import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalContext} from '../context/Provider';
import auth from '@react-native-firebase/auth';
import BottomTabNavigator from './BottomTabNavigator';
import Login from '../screens/Login';
import Loading from '../components/common/Loading';
import getUser from '../context/actions/profile/getUser';

const AppNavContainer = () => {
  const {
    authState: {loading},
  } = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {loading && <Loading />}
      {auth().currentUser ? <BottomTabNavigator /> : <Login />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
