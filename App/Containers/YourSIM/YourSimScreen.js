import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Caption, Title, List } from 'react-native-paper';

import Colors from '../../Themes/Colors';

import Header from '../../Components/Header';
import XTopUp from '../../Components/XTopUp';
import { Images } from '../../Themes';

const prices = [
  {
    id: 0,
    nation: 'USA',
    price: 'US$ 25 - 4GB',
  },
  {
    id: 1,
    nation: 'FR',
    price: 'US$ 8.5 - 2GB',
  },
  {
    id: 2,
    nation: 'CHI',
    price: 'US$ 8.5 - 2GB',
  },
];

const sim = [
  { id: 10, name: 'Global calls', value: 'US$ 0.2 - 0.3/min' },
  { id: 11, name: 'Global SMS', value: 'US$ 0.07 - 0.15/min' },
];
class SupportFAQScreen extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="YOUR SIM" />,
  });

  render() {
    return (
      <ScrollView style={styles.contaner}>
        <XTopUp onRedirectToTopUp={() => {}} />
        <Caption style={styles.captionHead}>Your Package</Caption>
        <ImageBackground source={Images.bgWeather} style={styles.mediaHead}>
          <Title style={styles.package}>United States</Title>
          <Title style={styles.package}>US$ 25 15 days. 5GB</Title>
        </ImageBackground>

        <View style={styles.form}>
          <List.Accordion title="Rates">
            <Caption style={styles.caption}>Data 100MB</Caption>

            {prices.map(pr => (
              <View style={styles.rowPrice} key={pr.id}>
                <Title>{pr.nation}</Title>
                <Caption style={styles.price}>{pr.price}</Caption>
              </View>
            ))}
            <View style={styles.detail}>
              <Title />
              <Title style={styles.detailText}>Details by country</Title>
            </View>

            {sim.map(si => (
              <View style={styles.rowPrice} key={si.id}>
                <Title>{si.name}</Title>
                <Caption style={styles.price}>{si.value}</Caption>
              </View>
            ))}
          </List.Accordion>
        </View>

        <View style={[styles.form, styles.spaceBottom]}>
          <List.Accordion title="SIM">
            <View style={styles.gbSim}>
              <Title>Connect/Update SIM</Title>
              <Title style={styles.detailText}>Click here</Title>
            </View>
            <View style={styles.gbSim}>
              <Title>Phone number</Title>
              <Title style={styles.detailText}>Available for a fee</Title>
            </View>
            <View style={styles.rowPrice}>
              <Title>SIM ICCID</Title>
              <Caption style={styles.price}>8997273773647845068</Caption>
            </View>
          </List.Accordion>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  package: { color: '#fff', paddingHorizontal: 10 },
  mediaHead: {
    height: 120,
    justifyContent: 'flex-end',
    marginHorizontal: 12,
    marginBottom: 15,
  },
  spaceBottom: { marginBottom: 70 },
  detailText: {
    fontSize: 18,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  price: { fontSize: 18, marginTop: 10 },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginBottom: 40,
  },
  gbSim: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  contaner: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  form: {
    marginHorizontal: 12,
    backgroundColor: '#fff',
    padding: 12,
    flex: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  caption: { fontSize: 18, marginVertical: 10, fontWeight: '400' },
  captionHead: {
    fontSize: 21,
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  btn: { marginVertical: 5 },
});

export default createStackNavigator(
  {
    supportFAQ: {
      screen: SupportFAQScreen,
    },
  },
  {
    initialRouteName: 'supportFAQ',
  },
);
