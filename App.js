import React, { useState, useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App
