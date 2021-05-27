import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './auth';
import HomeStack from './home';
import {navigationRef, isReadyRef} from '../providers/navigationService';

const Stack = createStackNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator initialRouteName="Auth" headerMode="none">
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Home" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
