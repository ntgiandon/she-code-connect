import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

const login = async dispatch => {
  dispatch({
    type: LOGIN_LOADING,
  });

  try {
    const {user, idToken} = await GoogleSignin.signIn();

    if (`${user.email}`.includes('@uef.edu.vn')) {
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    } else {
      await GoogleSignin.revokeAccess();
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Please use @UEF email'},
      });
      return () => login();
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response
        ? error.response.data
        : {error: 'Please use @UEF email'},
    });
  }
};

export default login;
