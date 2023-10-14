import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/Normalize';
import colors from '../../assets/theme/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },

  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  inputTitle: {
    backgroundColor: 'white',
    width: '80%',
    fontFamily: 'Nunito-Bold',
    fontSize: normalize(16),
  },

  goBack: {
    marginHorizontal: 10,
  },

  save: {
    marginHorizontal: 10,
    color: colors.success,
  },

  inputText: {
    backgroundColor: colors.white,
    padding: 20,
    textAlignVertical: 'top',
    fontFamily: 'Nunito-Regular',
    fontSize: normalize(15),
  },
});

export default styles;
