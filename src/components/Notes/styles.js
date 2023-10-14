import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {windowWidth} from '../../utils/Dimetions';
import {normalize} from '../../utils/Normalize';

const styles = StyleSheet.create({
  containerGridLeft: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  containerGridRight: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  container: {
    backgroundColor: colors.white,
    width: windowWidth / 2 - 20,
    padding: 8,
    margin: 10,
    borderRadius: 10,
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  title: {
    fontWeight: 'bold',
    fontSize: normalize(16),
    color: colors.secondary,
  },

  desc: {
    fontSize: normalize(15),
    color: colors.black,
  },

  date: {
    fontSize: normalize(12),
    textAlign: 'right',
  },

  wrapperDelete: {
    height: 25,
    borderRadius: 4,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },

  deleteButton: {
    color: colors.danger,
    fontSize: normalize(14),
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default styles;
