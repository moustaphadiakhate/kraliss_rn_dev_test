import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from "react-native-vector-icons/Ionicons";

import DashboardScreen from '../screens/DashboardScreen';
import UserListScreen from '../screens/UserListScreen';
import DetailScreen from '../screens/DetailScreen';
import CreateUserScreen from '../screens/CreateUserScreen';
import ResourceScreen from '../screens/ResourceScreen';
import ReduxDetailScreen from '../screens/ReduxDetailScreen';
import PdfSreen from '../screens/PdfSreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="DashboardScreen" headerMode="none">
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
      <Stack.Screen name="ResourceScreen" component={ResourceScreen} />
      <Stack.Screen name="UserListScreen" component={UserListScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ReduxDetailScreen" component={ReduxDetailScreen} />
      <Stack.Screen name="PdfSreen" component={PdfSreen} />
    </Stack.Navigator>
  );
}
