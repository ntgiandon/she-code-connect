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
    marginBottom: 20,
  },

  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: normalize(18),
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    fontWeight: 'bold',
  },

  contentView: {
    marginVertical: 20,
  },

  fontCustom: {
    fontSize: normalize(15),
    marginVertical: 5,
  },
});

export default styles;
