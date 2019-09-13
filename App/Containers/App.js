import '../Config';

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import RootContainer from './Root/RootContainer';
import createStore from '../Redux';

import DebugConfig from '../Config/DebugConfig';

import theme from '../Themes/XTheme';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <RootContainer />
        </PaperProvider>
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
