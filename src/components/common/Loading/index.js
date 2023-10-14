import React from 'react';
import {Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import styles from './styles';

export default function Loading() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255,0.75)"
      source={require('../../../assets/theme/lf30_editor_s8bj61jk.json')}
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Loading...</Text>
    </AnimatedLoader>
  );
}
