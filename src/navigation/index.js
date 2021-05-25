import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

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
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
