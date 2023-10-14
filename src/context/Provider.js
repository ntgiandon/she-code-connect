import React, {createContext, useReducer} from 'react';
import authInitialState from './initialsStates/authState';
import userInitialState from './initialsStates/userState';
import eventInitialState from './initialsStates/eventState';
import userEventInitialState from './initialsStates/userEventState';
import noteInitialState from './initialsStates/noteState';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';
import eventReducer from './reducers/event';
import userEventReducer from './reducers/userEvent';
import noteReducer from './reducers/note';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const [userEventState, userEventDispatch] = useReducer(
    userEventReducer,
    userEventInitialState,
  );
  const [eventState, eventDispatch] = useReducer(
    eventReducer,
    eventInitialState,
  );

  const [noteState, noteDispatch] = useReducer(noteReducer, noteInitialState);

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        userState,
        userDispatch,
        eventState,
        eventDispatch,
        userEventState,
        userEventDispatch,
        noteState,
        noteDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
