import {GET_USER, GET_USER_LOADING} from '../../constants/actionTypes';

const user = (state, {type, payload}) => {
  switch (type) {
    case GET_USER_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };

    default:
      return state;
  }
};

export default user;
