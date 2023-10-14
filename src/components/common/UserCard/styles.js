import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {normalize} from '../../../utils/Normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTouchable: {
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#FFF',
    height: 'auto',
    elevation: 1,
    width: '80%',
    borderRadius: 16,
  },

  cardContainer: {
    flexDirection: 'column',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: normalize(15),
    fontFamily: 'Nunito-BlackItalic',
    color: colors.primary,
    textAlign: 'center',
  },

  dateStyle: {
    color: colors.primary,
    alignSelf: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },

  line: {
    fontSize: 20,
    color: colors.secondary,
  },

  viewTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  wrapper: {
    height: 38,
    borderRadius: 4,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },

  deleteButton: {
    color: colors.danger,
    fontSize: normalize(16),
  },
});

export default styles;
