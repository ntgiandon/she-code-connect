import {StyleSheet} from 'react-native';
import {windowHeight} from '../../utils/Dimetions';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  recycleView: {
    marginBottom: windowHeight / 8,
    flex: 1,
    flexDirection: 'column',
  },
});

export default styles;
