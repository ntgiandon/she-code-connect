import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Notes from '../../screens/Notes';
import CreateNote from '../../screens/CreateNote';

const RootStack = createStackNavigator();

function NoteNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="NoteList"
          component={Notes}
          options={{headerShown: false}}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'fullScreenModal'}}>
        <RootStack.Screen
          name="CreateNote"
          component={CreateNote}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default NoteNavigator;
