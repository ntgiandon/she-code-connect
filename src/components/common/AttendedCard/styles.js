import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {normalize} from '../../../utils/Normalize';

export default styles = StyleSheet.create({
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
    fontSize: normalize(13),
    fontFamily: 'Nunito-SemiBold',
    color: colors.secondary,
    textAlign: 'center',
  },

  detail: {
    fontSize: normalize(11),
    fontFamily: 'Nunito-SemiBold',
  },

  line: {
    fontSize: 20,
    color: colors.secondary,
  },

  viewData: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
