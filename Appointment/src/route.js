import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './Screens/Home/Home';
import Screen2 from './Screens/screen2/Screen2';
import Screen3 from './Screens/Screen3/Screen3';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
    Screen2: {
      screen: Screen2,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
    Screen3: {
      screen: Screen3,
      navigationOptions: () => {
        return {
          headerShown: false,
        };
      },
    },
  },
  {
    defaultNavigationOptions: () => {
      return {
        headerTintColor: 'red',
      };
    },
  },
);

// const SwitchNavigator = createSwitchNavigator({
//   MainNavigator,
// });

export const AppLaunch = createSwitchNavigator({
  AppLaunch: {
    screen: MainNavigator,
  },
});

export default createAppContainer(AppLaunch);
