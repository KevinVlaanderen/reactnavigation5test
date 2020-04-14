import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {openPage} from '../actions/Navigate';
import {allPages} from '../PageRegistry';

// @ts-ignore
export const SidebarContent = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Sidebar</Text>

      {allPages.map((targetPage) => (
        <Button
          key={targetPage.name}
          onPress={() => openPage(navigation, targetPage.name)}
          title={`Open ${targetPage.name}`}
        />
      ))}
    </SafeAreaView>
  );
};
