// @flow

import React from 'react';
import I18n from 'react-native-i18n';
import { View, Text } from 'react-native';
import ExamplesRegistry from '../../../App/Services/ExamplesRegistry';

// Example
// prettier-ignore
/* eslint-disable import/no-named-as-default-member */
ExamplesRegistry.addPluginExample('I18n', () =>
  <View>
    <Text style={{color: '#ffffff'}}>Default Locale: {I18n.defaultLocale}</Text>
    <Text style={{color: '#ffffff'}}>Current Locale: {I18n.locale}</Text>
  </View>
)
