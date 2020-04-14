import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultPages, notInBottombar} from '../PageRegistry';

const Stack = createStackNavigator();

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SidebarItemNavigator = ({route, navigation}) => {
  return (
    <Stack.Navigator>
      {notInBottombar(defaultPages).map((page) => (
        <Stack.Screen
          key={page.name}
          name={page.name}
          component={page.component()}
        />
      ))}
    </Stack.Navigator>
  );
};
