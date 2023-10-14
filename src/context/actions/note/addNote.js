import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import {
  ADD_NOTES_FAIL,
  ADD_NOTES_LOADING,
  ADD_NOTES_SUCCESS,
} from '../../../constants/actionTypes';

const addNote =
  ({studentId, title, content, organizer, noteId}) =>
  async dispatch => {
    dispatch({
      type: ADD_NOTES_LOADING,
    });

    try {
      firestore()
        .collection('students')
        .doc(`${studentId}`)
        .collection('noteList')
        .doc(`${noteId}`)
        .set({
          title: title || '',
          content: content || '',
          organizer: organizer || '',
          date: moment().format('llll'),
        })
        .onSnapshot(res => {
          dispatch({
            type: ADD_NOTES_SUCCESS,
            payload: res.data,
          });
        });
    } catch (error) {
      dispatch({
        type: ADD_NOTES_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    }
  };

export default addNote;
