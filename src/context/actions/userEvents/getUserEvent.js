import firestore from '@react-native-firebase/firestore';
import {
  GET_USER_EVENT_FAIL,
  GET_USER_EVENT_LOADING,
  GET_USER_EVENT_SUCCESS,
} from '../../../constants/actionTypes';

const getUserEvent =
  ({studentId}) =>
  async dispatch => {
    dispatch({
      type: GET_USER_EVENT_LOADING,
    });

    try {
      firestore()
        .collection('students')
        .doc(`${studentId}`)
        .collection('eventList')
        .onSnapshot({includeMetadataChanges: true}, querySnapshot => {
          var tempDoc = [];
          querySnapshot.forEach(function (doc) {
            const data = doc.data();
            data.id = doc.id;
            tempDoc.push(data);
          });
          dispatch({
            type: GET_USER_EVENT_SUCCESS,
            payload: tempDoc,
          });
        })
        .catch(function (error) {
          console.log(
            'There has been a problem with your fetch operation: ' +
              error.message,
          );
          throw error;
        });
    } catch (error) {
      dispatch({
        type: GET_USER_EVENT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    }
  };

export default getUserEvent;
