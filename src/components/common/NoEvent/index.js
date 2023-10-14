import React from 'react';
import {View, Text} from 'react-native';
import GlobalStyle from '../../../utils/GlobalStyle';
import styles from './styles';

const NoEvent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No event</Text>
    </View>
  );
};

export default NoEvent;
