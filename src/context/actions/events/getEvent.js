import firestore from '@react-native-firebase/firestore';
import {GET_EVENTS, GET_EVENTS_LOADING} from '../../../constants/actionTypes';

const getEvent = async dispatch => {
  dispatch({
    type: GET_EVENTS_LOADING,
  });
  try {
    firestore()
      .collection('events')
      .onSnapshot({includeMetadataChanges: true}, querySnapshot => {
        var tempDoc = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          data.id = doc.id;
          tempDoc.push(data);
        });
        dispatch({
          type: GET_EVENTS,
          payload: tempDoc,
        });
      });
  } catch (error) {
    console.log('Error getting documents: ', error);
    throw error;
  }
};

export default getEvent;
