import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import LaunchScreen from '../Containers/SignIn/LaunchScreen';
import TimelineScreen from '../Containers/Timeline/TimelineNav';
import SupportFAQScreen from '../Containers/SupportFAQ/SupportFAQScreen';
import YourSimScreen from '../Containers/YourSIM/YourSimScreen';

import DrawerItems from './DrawerItems';

import styles from './Styles/NavigationStyles';

const Timeline = createDrawerNavigator(
  {
    Timeline: { screen: TimelineScreen },
    SupportFAQ: { screen: SupportFAQScreen },
    YourSim: { screen: YourSimScreen },
  },
  {
    /* eslint-disable react/jsx-props-no-spreading */
    contentComponent: props => <DrawerItems {...props} />,
  },
);

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    Timeline,
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
