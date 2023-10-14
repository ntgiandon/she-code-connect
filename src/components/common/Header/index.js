import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Badge, Surface, Text, Title} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const IconSize = 24;

const AppHeader = ({
  style,
  menu,
  onPressMenu,
  back,
  onPressBack,
  title,
  right,
  rightComponent,
  onRightPress,
  optionalBtn,
  optionalBtnPress,
  headerBg = 'white',
  iconColor = 'black',
  titleAlight,
  optionalBadge,
}) => {
  const LeftView = () => (
    <View style={styles.view}>
      {menu && (
        <TouchableOpacity onPress={onPressMenu}>
          <Feather name="menu" size={IconSize} color={iconColor} />
        </TouchableOpacity>
      )}
      {back && (
        <TouchableOpacity onPress={onPressBack}>
          <Feather name="arrow-left" size={IconSize} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
  const RightView = () =>
    rightComponent ? (
      rightComponent
    ) : (
      <View style={[styles.view, styles.rightView]}>
        {optionalBtn && (
          <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
            <Feather name={optionalBtn} size={IconSize} color={iconColor} />
            {optionalBadge && (
              <Badge style={{position: 'absolute', top: -5, right: -10}}>
                {optionalBadge}
              </Badge>
            )}
          </TouchableOpacity>
        )}
        {right !== '' && (
          <TouchableOpacity onPress={onRightPress}>
            <Feather name={right} size={IconSize} color={iconColor} />
          </TouchableOpacity>
        )}
      </View>
    );
  const TitleView = () => (
    <View style={styles.titleView}>
      <Title style={{color: iconColor, textAlign: titleAlight}}>{title}</Title>
    </View>
  );
  return (
    <Surface style={[styles.header, style, {backgroundColor: headerBg}]}>
      <LeftView />
      <TitleView />
      <RightView />
    </Surface>
  );
};

export default AppHeader;
