import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottombarItemNavigator} from './BottombarItemNavigator';
import {defaultPages, inBottombar} from '../PageRegistry';

const Tab = createBottomTabNavigator();

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BottombarNavigator = ({route, navigation}) => (
  <Tab.Navigator>
    {inBottombar(defaultPages).map((page) => (
      <Tab.Screen
        options={{}}
        key={page.name}
        name={page.name}
        component={BottombarItemNavigator}
        initialParams={{
          screen: page.name,
        }}
      />
    ))}
  </Tab.Navigator>
);
