import {
  ADD_NOTES_FAIL,
  ADD_NOTES_LOADING,
  ADD_NOTES_SUCCESS,
  DELETE_NOTES_FAIL,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_FAIL,
  GET_NOTES_SUCCESS,
  GET_USER_LOADING,
  UPDATE_NOTES_FAIL,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS,
} from '../../constants/actionTypes';

const note = (state, {type, payload}) => {
  switch (type) {
    case ADD_NOTES_SUCCESS:
      return {
        ...state,
        addNote: {
          ...state.addNote,
          loading: false,
          error: null,
          data: payload,
        },
      };

    case ADD_NOTES_LOADING:
      return {
        ...state,
        addNote: {
          ...state.addNote,
          loading: true,
          error: null,
        },
      };

    case ADD_NOTES_FAIL:
      return {
        ...state,
        addNote: {
          ...state.addNote,
          loading: false,
          error: null,
        },
      };

    case GET_NOTES_SUCCESS:
      return {
        ...state,
        getNote: {
          ...state.getNote,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case GET_NOTES_FAIL:
      return {
        ...state,
        getNote: {
          ...state.getNote,
          loading: false,
          error: payload,
        },
      };

    case GET_USER_LOADING:
      return {
        ...state,
        getNote: {
          ...state.getNote,
          loading: true,
          error: null,
        },
      };

    case UPDATE_NOTES_SUCCESS:
      return {
        ...state,
        updateNote: {
          ...state.getNote,
          loading: false,
          data: payload,
          error: null,
        },
      };

    case UPDATE_NOTES_FAIL:
      return {
        ...state,
        updateNote: {
          ...state.getNote,
          loading: false,
          error: payload,
        },
      };

    case UPDATE_NOTES_LOADING:
      return {
        ...state,
        updateNote: {
          ...state.getNote,
          loading: true,
          error: null,
        },
      };

    case DELETE_NOTES_LOADING: {
      return {
        ...state,
        deleteNote: {
          ...state.deleteNote,
          loading: true,
          error: null,
        },
      };
    }

    case DELETE_NOTES_SUCCESS: {
      return {
        ...state,
        deleteNote: {
          ...state.deleteNote,
          loading: false,
          error: null,
        },

        getUserEvent: {
          ...state.getNote,
          loading: false,
          data: state.getNote.data.filter(item => item.id !== payload),
          error: null,
        },
      };
    }

    case DELETE_NOTES_FAIL:
      return {
        ...state,
        deleteNote: {
          ...state.deleteNote,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default note;
