import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import GlobalStyle from '../../../utils/GlobalStyle';

import styles from './styles';

function AttendedCard({name, timeStart, date}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardTouchable}>
        <View style={styles.cardContainer}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.line}>--------------</Text>
        </View>
        <View style={styles.viewData}>
          <Text style={[GlobalStyle.CustomFontBody, styles.detail]}>
            {timeStart}
          </Text>
          <Text style={[GlobalStyle.CustomFontBody, styles.detail]}>
            {date}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AttendedCard;
