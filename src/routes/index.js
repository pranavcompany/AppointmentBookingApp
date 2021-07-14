// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import BookingSortScreen from '../screens/BookingSortScreen/BookingSortScreen';
import ViewSortScreen from '../screens/ViewSort/ViewSortScreen';


const Route = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BookingSortScreen" component={BookingSortScreen} />
      <Stack.Screen name="ViewSortScreen" component={ViewSortScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
