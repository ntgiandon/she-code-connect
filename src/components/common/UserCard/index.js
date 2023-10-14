import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GlobalStyle from '../../../utils/GlobalStyle';
import {normalize} from '../../../utils/Normalize';
import Icon, {Icons} from '../Icon';

import styles from './styles';

function UserCard({
  onPress,
  name,
  timeStart,
  timeEnd,
  date,
  location,
  id,
  pressDelete,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.cardTouchable}>
        <View style={styles.cardContainer}>
          <Text style={styles.nameStyle}>{name}</Text>

          <Text style={styles.line}>--------------</Text>
        </View>
        <View style={styles.viewTime}>
          <Text style={GlobalStyle.CustomFontBody}>{timeStart}</Text>
          <Text style={[GlobalStyle.CustomFontBody, styles.dateStyle]}>
            {'>>>'}
          </Text>
          <Text style={GlobalStyle.CustomFontBody}>{timeEnd}</Text>
        </View>
        <View style={styles.viewTime}>
          <Text style={[GlobalStyle.CustomFontBody, styles.dateStyle]}>
            {date}
          </Text>
          <Text style={GlobalStyle.CustomFontBody}>{location}</Text>
        </View>
        <Text
          style={[
            {
              fontSize: normalize(17),
              alignSelf: 'center',
            },
            styles.line,
          ]}>
          --------------------------------
        </Text>
        <TouchableOpacity style={styles.wrapper} onPress={pressDelete}>
          <Icon
            type={Icons.FontAwesome5}
            name="trash-alt"
            style={styles.deleteButton}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

export default memo(UserCard);
