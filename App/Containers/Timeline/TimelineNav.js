/* @flow */

import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import TopupScreen from '../Topup/TopupScreen';
import OrderSimScreen from '../Topup/OrderSimScreen';
import CheckOutScreen from '../Topup/CheckoutScreen';

import { routesConfig } from '../../Transforms/routeConfig';

export const routes = {
  topUp: TopupScreen,
  orderSim: OrderSimScreen,
  checkout: CheckOutScreen,
};

export default createStackNavigator(
  {
    home: {
      screen: HomeScreen,
    },
    // child route
    ...routesConfig(routes),
  },
  {
    initialRouteName: 'home',
  },
);
