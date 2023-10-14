import {StyleSheet} from 'react-native';
import colors from '../assets/theme/colors';
import {normalize} from './Normalize';

export default StyleSheet.create({
  CustomFontBig: {
    fontFamily: 'Roboto-Bold',
    fontSize: normalize(16),
    color: colors.black,
  },
  CustomFontBody: {
    fontFamily: 'Roboto-Regular',
    fontSize: normalize(15),
    color: colors.black,
  },
  CustomFontSpecial: {
    fontFamily: 'Nunito-Bold',
    fontSize: normalize(20),
    color: colors.primary,
  },
});
