import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {openPage} from '../actions/Navigate';
import {allPages} from '../PageRegistry';

// @ts-ignore
export const DefaultPage = ({route, navigation}) => {
  const {type, sidebar} = route?.params ?? {};

  return (
    <SafeAreaView>
      <Text>Name: {route.name}</Text>
      <Text>Type: {type}</Text>
      {/*<Text>Bottombar: {bottombar ? 'yes' : 'no'}</Text>*/}
      <Text>Sidebar: {sidebar ? 'yes' : 'no'}</Text>

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
