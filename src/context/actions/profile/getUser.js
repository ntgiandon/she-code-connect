import firestore from '@react-native-firebase/firestore';
import {GET_USER, GET_USER_LOADING} from '../../../constants/actionTypes';

const getUser = email => async dispatch => {
  dispatch({
    type: GET_USER_LOADING,
  });
  try {
    firestore()
      .collection('students')
      .where('email', '==', email)
      .onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          dispatch({
            type: GET_USER,
            payload: doc.data(),
          });
        });
      });
  } catch (error) {
    console.log('Error getting documents: ', error);
  }
};

export default getUser;
