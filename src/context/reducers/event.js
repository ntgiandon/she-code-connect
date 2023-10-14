import {GET_EVENTS, GET_EVENTS_LOADING} from '../../constants/actionTypes';

const events = (state, {type, payload}) => {
  switch (type) {
    case GET_EVENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_EVENTS:
      return {
        ...state,
        loading: false,
        events: payload,
        error: null,
      };

    default:
      return state;
  }
};

export default events;
