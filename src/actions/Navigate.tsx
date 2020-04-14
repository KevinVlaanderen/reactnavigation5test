import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';
import {isInBottomBar, pageWithName} from '../PageRegistry';
import {NavigationProp} from '@react-navigation/native';
import {BOTTOMBAR_NAVIGATOR} from '../constants';

export const navigationRef = React.createRef<NavigationContainerRef>();

// @ts-ignore
export const openPage = (navigation: NavigationProp, name, params?) => {
  const foundPage = pageWithName(name)!;

  const combinedParams = {
    ...(params ? params : []),
    ...foundPage.params,
  };

  switch (foundPage.params.type) {
    case 'popup':
      navigation.navigate(foundPage.name, combinedParams);
      break;
    case 'default':
    default:
      if (isInBottomBar(foundPage)) {
        navigation.navigate(BOTTOMBAR_NAVIGATOR, {
          screen: foundPage.name,
          params: {
            screen: foundPage.name,
            params: combinedParams,
          },
        });
      } else {
        navigation.navigate(foundPage.name, combinedParams);
      }
  }
};
