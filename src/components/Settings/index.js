import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../common/CustomButton';
import {GlobalContext} from '../../context/Provider';
import {GoogleSignin} from '@react-native-community/google-signin';

export default function index({logout}) {
  return (
    <View>
      <CustomButton title="Log out" primary onPress={logout} />
    </View>
  );
}
