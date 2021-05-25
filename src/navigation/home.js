import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from "react-native-vector-icons/Ionicons";

import DashboardScreen from '../screens/DashboardScreen';
import UserListScreen from '../screens/UserListScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import ReduxDetailScreen from '../screens/ReduxDetailScreen';

const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// const BottomTabRouter = () => {
//   return (
//     <Tab.Navigator
//       // tabBar={props => <CustomTabBar {...props} />}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused
//               ? 'ios-information-circle'
//               : 'ios-information-circle-outline';
//           } else if (route.name === 'Settings') {
//             iconName = focused ? 'ios-list-box' : 'ios-list';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       }}
//       initialRouteName="Buzz">
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           iconName: 'profil',
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="DashboardScreen" headerMode="none">
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="UserListScreen" component={UserListScreen} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
      <Stack.Screen name="ReduxDetailScreen" component={ReduxDetailScreen} />
    </Stack.Navigator>
  );
}
