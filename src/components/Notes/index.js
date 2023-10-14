import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon, {Icons} from '../common/Icon';
import styles from './styles';

const Notes = ({
  title,
  desc,
  date,
  onPress,
  containerGridLeft,
  containerGridRight,
  pressDelete,
}) => {
  const getContainer = () => {
    if (containerGridLeft) {
      return styles.containerGridLeft;
    }
    if (containerGridRight) {
      return styles.containerGridRight;
    }
  };
  return (
    <View style={getContainer()}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.desc} numberOfLines={3}>
          {desc}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity style={styles.wrapperDelete} onPress={pressDelete}>
          <Icon
            type={Icons.FontAwesome5}
            name="trash-alt"
            style={styles.deleteButton}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Notes;
