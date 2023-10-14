import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon, {Icons} from '../../components/common/Icon';
import UpcomingEvents from '../../screens/UpcomingEvents';
import EventsAttended from '../../screens/EventsAttended';
import colors from '../../assets/theme/colors';
import NoteNavigator from '../NoteNavigator';

const Tab = createMaterialTopTabNavigator();

function HandboookNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Upcoming"
        component={UpcomingEvents}
        options={{
          tabBarIcon: () => (
            <Icon
              type={Icons.FontAwesome5}
              name="calendar"
              color={colors.secondary}
              size={20}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Attended"
        component={EventsAttended}
        options={{
          tabBarIcon: () => (
            <Icon
              type={Icons.FontAwesome5}
              name="calendar-check"
              color={colors.secondary}
              size={20}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notes"
        component={NoteNavigator}
        options={{
          tabBarIcon: () => (
            <Icon
              type={Icons.FontAwesome5}
              name="sticky-note"
              color={colors.secondary}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HandboookNavigator;
