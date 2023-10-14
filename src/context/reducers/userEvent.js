import {
  ADD_USER_EVENT_FAIL,
  ADD_USER_EVENT_LOADING,
  ADD_USER_EVENT_SUCCESS,
  DELETE_USER_EVENT_FAIL,
  DELETE_USER_EVENT_LOADING,
  DELETE_USER_EVENT_SUCCESS,
  GET_USER_EVENT_FAIL,
  GET_USER_EVENT_LOADING,
  GET_USER_EVENT_SUCCESS,
  UPDATE_USER_EVENT_FAIL,
  UPDATE_USER_EVENT_LOADING,
  UPDATE_USER_EVENT_SUCCESS,
} from '../../constants/actionTypes';

const userEvent = (state, {type, payload}) => {
  switch (type) {
    case ADD_USER_EVENT_SUCCESS:
      return {
        ...state,
        addUserEvent: {
          ...state.addUserEvent,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case ADD_USER_EVENT_LOADING:
      return {
        ...state,
        addUserEvent: {
          ...state.addUserEvent,
          loading: true,
          error: null,
        },
      };

    case ADD_USER_EVENT_FAIL:
      return {
        ...state,
        addUserEvent: {
          ...state.addUserEvent,
          loading: false,
          error: payload,
        },
      };

    case GET_USER_EVENT_SUCCESS:
      return {
        ...state,
        getUserEvent: {
          ...state.getUserEvent,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_USER_EVENT_FAIL:
      return {
        ...state,
        getUserEvent: {
          ...state.getUserEvent,
          loading: false,
          error: payload,
        },
      };

    case GET_USER_EVENT_LOADING:
      return {
        ...state,
        getUserEvent: {
          ...state.getUserEvent,
          loading: true,
          error: null,
        },
      };

    case UPDATE_USER_EVENT_SUCCESS:
      return {
        ...state,
        updateUserEvent: {
          ...state.getUserEvent,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case UPDATE_USER_EVENT_FAIL:
      return {
        ...state,
        updateUserEvent: {
          ...state.getUserEvent,
          loading: false,
          error: payload,
        },
      };

    case UPDATE_USER_EVENT_LOADING:
      return {
        ...state,
        updateUserEvent: {
          ...state.getUserEvent,
          loading: true,
          error: null,
        },
      };

    case DELETE_USER_EVENT_LOADING: {
      return {
        ...state,
        deleteUserEvent: {
          ...state.deleteUserEvent,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_USER_EVENT_SUCCESS: {
      return {
        ...state,
        deleteUserEvent: {
          ...state.deleteUserEvent,
          loading: false,
          error: null,
        },

        getUserEvent: {
          ...state.getUserEvent,
          loading: false,
          data: state.getUserEvent.data.filter(item => item.id !== payload),
          error: null,
        },
      };
    }

    case DELETE_USER_EVENT_FAIL:
      return {
        ...state,
        deleteUserEvent: {
          ...state.deleteUserEvent,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default userEvent;
