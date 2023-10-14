import React, {useContext} from 'react';

import Settings from '../../components/Settings';
import logoutUser from '../../context/actions/auth/logoutUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const {authDispatch} = useContext(GlobalContext);

  const googleLogout = () => {
    logoutUser(authDispatch);
  };

  return <Settings logout={googleLogout} />;
};

export default Login;
