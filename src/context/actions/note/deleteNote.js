import firestore from '@react-native-firebase/firestore';
import {
  DELETE_NOTES_FAIL,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
} from '../../../constants/actionTypes';

const deleteNote =
  ({studentId, noteId}) =>
  async dispatch => {
    dispatch({
      type: DELETE_NOTES_LOADING,
    });

    try {
      firestore()
        .collection('students')
        .doc(`${studentId}`)
        .collection('noteList')
        .doc(`${noteId}`)
        .delete()
        .then(() => {
          dispatch({
            type: DELETE_NOTES_SUCCESS,
            payload: noteId,
          });
        });
    } catch (error) {
      dispatch({
        type: DELETE_NOTES_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Something went wrong, try again'},
      });
    }
  };

export default deleteNote;
