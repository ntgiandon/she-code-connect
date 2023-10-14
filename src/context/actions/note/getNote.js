import firestore from '@react-native-firebase/firestore';
import {
  GET_NOTES_FAIL,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
} from '../../../constants/actionTypes';

const getNote =
  ({studentId}) =>
  async dispatch => {
    dispatch({
      type: GET_NOTES_LOADING,
    });

    try {
      firestore()
        .collection('students')
        .doc(`${studentId}`)
        .collection('noteList')
        .onSnapshot({includeMetadataChanges: true}, querySnapshot => {
          var tempDoc = [];
          querySnapshot.forEach(function (doc) {
            const data = doc.data();
            data.id = doc.id;
            tempDoc.push(data);
          });
          dispatch({
            type: GET_NOTES_SUCCESS,
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
        type: GET_NOTES_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    }
  };

export default getNote;
