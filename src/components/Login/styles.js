import {StyleSheet} from 'react-native';
import {windowWidth} from '../../utils/Dimetions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },

  logo: {
    width: windowWidth / 3,
    flex: 1,
    resizeMode: 'contain',
    marginTop: 20,
  },

  wrapper: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerText: {
    flex: 1,
  },

  containerInput: {
    flex: 3,
    width: '80%',
  },

  containerConnect: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    width: '50%',
    marginTop: 20,
  },
});

export default styles;
