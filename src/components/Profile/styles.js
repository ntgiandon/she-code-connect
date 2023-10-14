import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import {normalize} from '../../utils/Normalize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
  },
  header: {
    backgroundColor: colors.lightGrey,
    height: 100,
  },
  imageView: {
    position: 'absolute',
    marginTop: 30,
    elevation: 12,
    marginBottom: 10,
    alignSelf: 'center',
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
  },

  body: {
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: 15,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },

  containerInput: {
    width: '80%',
    marginTop: normalize(20),
  },

  name: {
    textAlign: 'center',
    marginTop: 10,
  },

  containerDetail: {
    marginVertical: 20,
  },

  detail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5,
  },
});

export default styles;
