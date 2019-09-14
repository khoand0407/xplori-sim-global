import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

import { Images } from '../../Themes';

class Map extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.wrapMap}>
        <View style={styles.mapItem}>
          <ImageBackground source={Images.mapCity} style={styles.map} />
          <Title>City Map</Title>
        </View>
        <View style={styles.mapItem}>
          <ImageBackground source={Images.mapTranspot} style={styles.map} />
          <Title>Transport Map</Title>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: { height: 100 },
  wrapMap: { flexDirection: 'row', marginVertical: 10 },
  mapItem: { flex: 1, margin: 10 },
});

export default Map;
