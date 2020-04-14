import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {popups} from '../PageRegistry';
import {SidebarNavigator} from './SidebarNavigator';
import {SIDEBAR_NAVIGATOR} from '../constants';

const Stack = createStackNavigator();

// @ts-ignore
export const PopupNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name={SIDEBAR_NAVIGATOR}
        component={SidebarNavigator}
        options={{headerShown: false}}
      />
      {popups.map((page) => (
        <Stack.Screen
          key={page.name}
          name={page.name}
          component={page.component()}
          initialParams={page.params}
        />
      ))}
    </Stack.Navigator>
  );
};
