import {StyleSheet} from 'react-native';
import {windowHeight} from '../../../utils/Dimetions';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontWeight: 'bold',
  },

  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 30,
    fontFamily: 'Dongle-Regular',
  },
});

export default styles;
