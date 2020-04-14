import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultPages} from '../PageRegistry';

const Stack = createStackNavigator();

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BottombarItemNavigator = ({route, navigation}) => (
  <Stack.Navigator>
    {defaultPages.map((page) => (
      <Stack.Screen
        key={page.name}
        name={page.name}
        component={page.component()}
        initialParams={page.params}
      />
    ))}
  </Stack.Navigator>
);
