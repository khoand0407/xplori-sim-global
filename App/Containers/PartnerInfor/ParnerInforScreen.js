import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper';

import Header from '../../Components/Header';
import { routesConfig } from '../../Transforms/routeConfig';

import PartnerDetailScreen from './PartnerDetailScreen';

const datas = [
  {
    id: 0,
    title: 'Vietsea Travel - Hong Kong',
    content:
      'Cras aliquam lectus nec lacinia luctus. Praesent quis nulla non arcu luctus. Proin interdu...',
    image: 'https://picsum.photos/701',
  },
  {
    id: 2,
    title: 'Legacy Suites',
    content:
      'Mattis fringilla. In etos eros, mollis ac semper et, Praesent quis nulla non arcu luctus. Proin interdu...',
    image: 'https://picsum.photos/702',
  },
  {
    id: 3,
    title: 'Solitaire Sukhumvit',
    content:
      'In etos eros, mollis ac semper et, Praesent quis nulla non arcu luctus. Proin interdu...',
    image: 'https://picsum.photos/703',
  },
];

class PartnerInforScreen extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header navigation={navigation} title="LIST PARTNER">
        <Appbar.Action icon="search" onPress={() => {}} />
      </Header>
    ),
  });

  constructor(props) {
    super(props);

    this.state = {};

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.navigation.navigate('partnerDetail');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapCards}>
          {datas.map(data => (
            <Card key={data.id} onPress={this.nextPage}>
              <Card.Cover source={{ uri: data.image }} />
              <Card.Content>
                <Title>{data.title}</Title>
                <Paragraph style={styles.content}>{data.content}</Paragraph>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    );
  }
}

PartnerInforScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F7FA',
  },
  content: { color: 'gray', fontSize: 16 },
  wrapCards: { marginHorizontal: 12, marginVertical: 15 },
});

export const routes = {
  partnerDetail: PartnerDetailScreen,
};

export default createStackNavigator(
  {
    PartnerInfor: {
      screen: PartnerInforScreen,
    },
    // child route
    ...routesConfig(routes),
  },
  {
    initialRouteName: 'PartnerInfor',
  },
);
