/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from './src/navigation';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './src/store/reducer';

// axios api client
const client = axios.create({
  baseURL: 'https://reqres.in/api',
  responseType: 'json',
});

// initializes axios api client with axiosMiddleware and create redux store with reducer.
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
