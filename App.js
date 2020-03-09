/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import {HomeScreen, AppContainer} from './navigator/base-nav';
// import {AppContainer} from './navigator/bottomNav';
import {MainTabNavigator} from './navigator/mainTabNavigator';

const App: () => React$Node = () => {
  return <MainTabNavigator />;
};

export default App;
