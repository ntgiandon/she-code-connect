import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {normalize} from '../../../utils/Normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginRight: 10,
    height: '100%',
    width: '100%',
  },

  containerIcon: {
    marginHorizontal: 0,
  },

  title: {
    fontFamily: 'Nunito-Bold',
    color: colors.secondary,
    fontSize: normalize(14),
  },

  icons: {
    fontSize: 15,
    padding: 15,
    marginLeft: 15,
  },
  fontCustom: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: colors.darkGrey,
  },
  time: {
    fontFamily: 'Roboto-BoldItalic',
    color: colors.secondary,
    fontSize: 17,
    alignSelf: 'flex-end',
  },
  containerButton: {
    alignSelf: 'flex-end',
  },

  buttonSave: {
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
  },
});

export default styles;
