import React, { useState, useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './redux';
import TestRedux from './src/TestRedux';

const App = () => {
  return (
    <Provider store={store}>
      <TestRedux />
    </Provider>
  );
}

export default App
