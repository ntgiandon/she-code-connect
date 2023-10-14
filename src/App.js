import React, {useEffect} from 'react';
import GlobalProvider from './context/Provider';
import AppNavContainer from './navigations';
import {GoogleSignin} from '@react-native-community/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '329586184915-vnpc04mai5oi21kni5cs87s4k5jl3a1s.apps.googleusercontent.com',
      hostedDomain: 'uef.edu.vn',
    });
  }, []);

  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
