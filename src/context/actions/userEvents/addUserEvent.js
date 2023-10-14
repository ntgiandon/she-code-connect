import firestore from '@react-native-firebase/firestore';
import {
  ADD_USER_EVENT_FAIL,
  ADD_USER_EVENT_LOADING,
  ADD_USER_EVENT_SUCCESS,
} from '../../../constants/actionTypes';

const addUserEvent =
  ({
    studentId,
    eventId,
    date,
    timeStart,
    timeEnd,
    name,
    organizer,
    location,
    guests,
  }) =>
  async dispatch => {
    dispatch({
      type: ADD_USER_EVENT_LOADING,
    });

    try {
      firestore()
        .collection('students')
        .doc(`${studentId}`)
        .collection('eventList')
        .doc(`${eventId}`)
        .set({
          name: name || '',
          organizer: organizer || '',
          guests: guests || '',
          date: date || '',
          timeStart: timeStart || '',
          timeEnd: timeEnd || '',
          location: location || '',
          isParticipated: false,
        })
        .onSnapshot(res => {
          dispatch({
            type: ADD_USER_EVENT_SUCCESS,
            payload: res.data,
          });
        });
    } catch (error) {
      dispatch({
        type: ADD_USER_EVENT_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    }
  };

export default addUserEvent;
