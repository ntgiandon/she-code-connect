// @flow
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ListItemButton from '../ListItemButton';
import styles from './styles';

const Counter = ({count}) => (
  <View style={styles.counter}>
    <Text style={styles.counterText}>{count}</Text>
  </View>
);

const Icon = () => (
  <View style={styles.icon}>
    <Image
      source={require('../../../assets/images/filters-all.png')}
      style={{width: 24, height: 24}}
    />
  </View>
);

const StickyItemButton = ({activeFiltersCount, onPress}) => (
  <ListItemButton
    onPress={onPress}
    text="Filters"
    icon={
      activeFiltersCount ? <Counter count={activeFiltersCount} /> : <Icon />
    }
  />
);

export default StickyItemButton;
