import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {defaultPages, notInBottombar} from '../PageRegistry';
import {SidebarItemNavigator} from './SidebarItemNavigator';
import {BottombarNavigator} from './BottombarNavigator';
import {BOTTOMBAR_NAVIGATOR} from '../constants';
import {SidebarContent} from '../components/SidebarContent';

const Drawer = createDrawerNavigator();

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SidebarNavigator = ({route, navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName={BOTTOMBAR_NAVIGATOR}
      drawerContent={() => <SidebarContent navigation={navigation} />}>
      <Drawer.Screen
        name={BOTTOMBAR_NAVIGATOR}
        component={BottombarNavigator}
      />
      {notInBottombar(defaultPages).map((page) => (
        <Drawer.Screen
          key={page.name}
          name={page.name}
          component={SidebarItemNavigator}
          initialParams={{
            screen: page.name,
            params: page.params,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};
