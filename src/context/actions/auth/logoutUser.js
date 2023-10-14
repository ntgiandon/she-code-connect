import {LOGOUT_USER} from '../../../constants/actionTypes';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

// export default async () => dispatch => {
export default logout = async dispatch => {
  try {
    await GoogleSignin.revokeAccess();
    await auth().signOut();

    dispatch({
      type: LOGOUT_USER,
    });
  } catch (e) {
    console.log(e);
  }
};
