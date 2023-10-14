import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon, {Icons} from '../../components/common/Icon';
import * as Animatable from 'react-native-animatable';
import {
  COMMUNITY,
  EVENTS,
  HANDBOOK,
  PROFILE,
  SETTINGS,
} from '../../constants/routeNames';
import colors from '../../assets/theme/colors';
import tabNavBar from '../../context/actions/tabNavBar';
import styles from './styles';

const TabArr = [
  {
    route: EVENTS,
    label: EVENTS,
    type: Icons.Feather,
    icon: 'calendar',
    component: tabNavBar,
  },
  {
    route: COMMUNITY,
    label: COMMUNITY,
    type: Icons.Feather,
    icon: 'users',
    component: tabNavBar,
  },
  {
    route: HANDBOOK,
    label: HANDBOOK,
    type: Icons.FontAwesome5,
    icon: 'book',
    component: tabNavBar,
  },
  {
    route: PROFILE,
    label: PROFILE,
    type: Icons.Feather,
    icon: 'user',
    component: tabNavBar,
  },
  {
    route: SETTINGS,
    label: SETTINGS,
    type: Icons.Feather,
    icon: 'settings',
    component: tabNavBar,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? colors.white : colors.primary}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
