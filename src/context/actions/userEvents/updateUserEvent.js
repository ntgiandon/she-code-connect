import firestore from '@react-native-firebase/firestore';
import {
  UPDATE_USER_EVENT_FAIL,
  UPDATE_USER_EVENT_LOADING,
  UPDATE_USER_EVENT_SUCCESS,
} from '../../../constants/actionTypes';

const updateUserEvent =
  ({studentId, eventId}) =>
  async dispatch => {
    dispatch({
      type: UPDATE_USER_EVENT_LOADING,
    });

    try {
      firestore()
        .collection('students')
        .doc(`${studentId}`)
        .collection('eventList')
        .doc(`${eventId}`)
        .update({
          isParticipated: true,
        })
        .onSnapshot(res => {
          dispatch({
            type: UPDATE_USER_EVENT_SUCCESS,
            payload: res.data,
          });
        });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_EVENT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    }
  };

export default updateUserEvent;
