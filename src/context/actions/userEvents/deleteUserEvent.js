import firestore from '@react-native-firebase/firestore';
import {
  DELETE_USER_EVENT_FAIL,
  DELETE_USER_EVENT_LOADING,
  DELETE_USER_EVENT_SUCCESS,
} from '../../../constants/actionTypes';

const deleteUserEvent =
  ({studentId, eventId}) =>
  async dispatch => {
    dispatch({
      type: DELETE_USER_EVENT_LOADING,
    });

    try {
      firestore()
        .collection('students')
        .doc(`${studentId}`)
        .collection('eventList')
        .doc(`${eventId}`)
        .delete()
        .then(() => {
          dispatch({
            type: DELETE_USER_EVENT_SUCCESS,
            payload: eventId,
          });
        });
    } catch (error) {
      dispatch({
        type: DELETE_USER_EVENT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    }
  };

export default deleteUserEvent;
