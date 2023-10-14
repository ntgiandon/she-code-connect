import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/Normalize';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  iconView: {
    alignSelf: 'flex-end',
  },

  text: {
    fontSize: normalize(15),
    textAlign: 'center',
    marginVertical: 10,
  },

  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
