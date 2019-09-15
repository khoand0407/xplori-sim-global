import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
// import PropTypes from 'prop-types';
import { Title, Caption } from 'react-native-paper';

import Header from '../../Components/Header';
import { routesConfig } from '../../Transforms/routeConfig';

const PHOTOS = [
  {
    id: 0,
    image: `https://unsplash.it/300/300/?random&__id=0`,
    nation: 'Turkey',
    price: 'US$ 18',
    expire: '7 days. 3GB',
  },
  {
    id: 1,
    image: `https://unsplash.it/300/300/?random&__id=1`,
    nation: 'South Korea',
    price: 'US$ 15',
    expire: '7 days. 5GB',
  },
  {
    id: 2,
    image: `https://unsplash.it/300/300/?random&__id=2`,
    nation: 'United States',
    price: 'US$ 25',
    expire: '15 days. 5GB',
  },
  {
    id: 3,
    image: `https://unsplash.it/300/300/?random&__id=3`,
    nation: 'Hong Kong',
    price: 'US$ 10',
    expire: '5 days. 5GB',
  },
  {
    id: 4,
    image: `https://unsplash.it/300/300/?random&__id=4`,
    nation: 'European Union',
    price: 'US$ 22',
    expire: '15 days. 6GB',
  },
  {
    id: 5,
    image: `https://unsplash.it/300/300/?random&__id=5`,
    nation: 'China',
    price: 'US$ 15',
    expire: '7 days. 2GB',
  },
  {
    id: 6,
    image: `https://unsplash.it/300/300/?random&__id=6`,
    nation: 'Thailand',
    price: 'US$ 8.5',
    expire: '4 days. 2GB',
  },
  {
    id: 7,
    image: `https://unsplash.it/300/300/?random&__id=7`,
    nation: 'Australia',
    price: 'US$ 14',
    expire: '7 days. 5GB',
  },
  {
    id: 8,
    image: `https://unsplash.it/300/300/?random&__id=8`,
    nation: 'Taiwan',
    price: 'US$ 10',
    expire: '7 days. 5GB',
  },
  {
    id: 9,
    image: `https://unsplash.it/300/300/?random&__id=9`,
    nation: 'Singapore',
    price: 'US$ 8.5',
    expire: '3 days. 2GB',
  },
];

const orders = [
  {
    id: 0,
    image: 'https://unsplash.it/300/300/?random&__id=0',
    title1: 'Xplori SIM',
    description1: 'US$ 9 credits',
    title2: 'US$ 10',
    description2: 'Incl. shipping',
  },
  {
    id: 1,
    image: 'https://unsplash.it/300/300/?random&__id=1',
    title1: 'HSBC offer',
    description1: 'Extra credits',
    title2: 'US$ 10',
    description2: 'Incl. shipping',
  },
];

class PackageAndOrderScreen extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="PACKAGES & ORDER SIM" />,
  });

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Caption style={styles.caption}>Country Packages</Caption>
          <View style={styles.grid}>
            {PHOTOS.map(photo => (
              <View key={photo.id} style={styles.item}>
                <ImageBackground
                  source={{ uri: photo.image }}
                  style={styles.photo}
                >
                  <Text style={styles.title}>{photo.nation}</Text>
                  <View style={styles.grMoney}>
                    <Text style={styles.title}>{photo.price}</Text>
                    <Text style={styles.title}>{photo.expire}</Text>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </View>
          <Caption style={styles.caption}>Order SIM</Caption>
          <View style={styles.grid}>
            {orders.map(order => (
              <View style={[styles.item, styles.footer]} key={order.id}>
                <ImageBackground
                  source={{ uri: order.image }}
                  style={styles.photo}
                />
                <View>
                  <View style={styles.grMoney}>
                    <Text style={styles.titleOrder}>{order.title1}</Text>
                    <Text style={styles.titleOrderSmall}>
                      {order.description1}
                    </Text>
                  </View>
                  <View style={styles.grMoney}>
                    <Text style={[styles.titleOrder, styles.gray]}>
                      {order.title2}
                    </Text>
                    <Text style={styles.titleOrderSmall}>
                      {order.description2}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    height: Dimensions.get('window').width / 3,
    width: '50%',
    padding: 10,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    padding: 1,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    padding: 5,
    fontWeight: 'bold',
  },
  grMoney: { flexDirection: 'row', justifyContent: 'space-between' },
  caption: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop: 20,
  },
  titleOrder: {
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
  },
  titleOrderSmall: {
    fontSize: 12,
    marginVertical: 8,
    color: 'gray',
  },
  footer: {
    marginBottom: 50,
    height: Dimensions.get('window').width / 2,
  },
  gray: { color: 'gray' },
});

PackageAndOrderScreen.propTypes = {
  // theme: PropTypes.object,
};

export const routes = {
  // some child route
  childPackage: () => <Title>child</Title>,
};

export default createStackNavigator(
  {
    PackageOrder: {
      screen: PackageAndOrderScreen,
    },
    // child route
    ...routesConfig(routes),
  },
  {
    initialRouteName: 'PackageOrder',
  },
);
