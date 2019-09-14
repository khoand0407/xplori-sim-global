/* @flow */

import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Appbar, Text } from 'react-native-paper';

import HomeScreen from './HomeScreen';

export const examples = {
  ChildRoute: () => <Text>SupportFAQ</Text>,
};

const routes = Object.keys(examples)
  .map(id => ({ id, item: examples[id] }))
  .reduce((acc, { id, item }) => {
    const Comp = item;
    /* eslint-disable react/jsx-props-no-spreading */
    const Screen = props => <Comp {...props} />;

    Screen.navigationOptions = props => ({
      header: (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => props.navigation.goBack()} />
          <Appbar.Content title={Comp.title} />
        </Appbar.Header>
      ),
      /* $FlowFixMe */
      ...(typeof Comp.navigationOptions === 'function'
        ? Comp.navigationOptions(props)
        : Comp.navigationOptions),
    });

    return {
      ...acc,
      [id]: { screen: Screen },
    };
  }, {});

export default createStackNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    // child route
    ...routes,
  },
  {
    initialRouteName: 'home',
  },
);
