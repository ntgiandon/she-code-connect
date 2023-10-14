import React, {useContext, useEffect} from 'react';
import Loading from '../../components/common/Loading';

import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';
import PushNotification from 'react-native-push-notification';

const Login = () => {
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const googleLogin = () => {
    loginUser(authDispatch);
  };

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'events-channel',
      channelName: 'Events Channel',
      playSound: true,
      soundName: 'default',
    });
  };

  useEffect(() => {
    createChannels();
  }, []);

  if (loading) {
    <Loading />;
  }

  return <LoginComponent googleLogin={googleLogin} error={error} />;
};

export default Login;
