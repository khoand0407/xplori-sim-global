import * as React from 'react';
import { Appbar } from 'react-native-paper';

/**
 *
 * @param {*} routes // array of child route
 */
export const routesConfig = routes =>
  Object.keys(routes)
    .map(id => ({ id, item: routes[id] }))
    .reduce((acc, { id, item }) => {
      const Comp = item;
      /* eslint-disable react/jsx-props-no-spreading */
      const Screen = props => <Comp {...props} />;

      Screen.navigationOptions = props => ({
        header: (
          <Appbar.Header>
            <Appbar.Action
              icon="arrow-back"
              onPress={() => props.navigation.goBack()}
            />
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
