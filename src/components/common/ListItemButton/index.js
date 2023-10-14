// @flow
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const ListItemButton = ({active, onPress, text, icon}) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];

  if (active) {
    containerStyle.push(styles.containerActive);
    textStyle.push(styles.textActive);
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={containerStyle}>
        {icon && icon}
        <Text numberOfLines={1} ellipsizeMode="clip" style={textStyle}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItemButton;
