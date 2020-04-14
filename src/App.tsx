/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {navigationRef} from './actions/Navigate';
import {PopupNavigator} from './navigators/PopupNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <PopupNavigator />
    </NavigationContainer>
  );
};

export default App;
