import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  button: {
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    paddingHorizontal: 12,
  },
  containerActive: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.white,
  },
  textActive: {
    color: '#2252C7',
  },
});

export default styles;
