import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ratesData = [
  {
    id: 0,
    nation: 'Costa Rica',
    rate: '$ 1',
    rate1: 'in Colons',
  },
  {
    id: 1,
    nation: 'USD',
    rate: '0.0017',
    rate1: '593',
  },
  {
    id: 2,
    nation: 'EUR',
    rate: '0.0015',
    rate1: '662',
  },
  {
    id: 3,
    nation: 'SGD',
    rate: '0.0023',
    rate1: '430.5',
  },
];

class ExchangeRates extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.wrap}>
        <Caption style={styles.caption}>Foreign Exchange Rates</Caption>
        {ratesData.map(item => (
          <View style={styles.container} key={item.id}>
            <View style={styles.nation}>
              <Icon name="aspect-ratio" style={styles.flag} />
              <Title>{item.nation}</Title>
            </View>
            <View style={styles.wrapRate}>
              <Title>{item.rate}</Title>
              <Title>{item.rate1}</Title>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nation: { flexDirection: 'row', flex: 1 },
  flag: { fontSize: 24, paddingRight: 10 },
  container: { flexDirection: 'row' },
  wrapRate: { flexDirection: 'row', flex: 1, justifyContent: 'space-between' },
  wrap: { marginHorizontal: 15 },
  caption: { fontSize: 18, marginBottom: 10 },
});

export default ExchangeRates;
