import React from 'react';
import { ScrollView } from 'react-native';

import Weather from './Weather';
import Map from './Map';
import ExchangeRates from './ExchangeRates';
import MediaEssential from './MediaEssential';

class Essentials extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <Weather />
        <Map />
        <ExchangeRates />
        <MediaEssential />
      </ScrollView>
    );
  }
}

export default Essentials;
