import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Caption,
  Checkbox,
  Title,
  Surface,
  withTheme,
} from 'react-native-paper';

import Header from '../../Components/Header';
import XButton from '../../Components/XButton';

const datas = [
  {
    id: 0,
    price: '$ 2.5',
    description: 'Up to 350 MB',
    expired: '1 - 2 days moderate usage',
  },
  {
    id: 1,
    price: '$ 10',
    description: 'Up to 1.5 GB',
    expired: '4 - 5 days moderate usage',
  },
  {
    id: 2,
    price: '$ 20',
    description: 'Up to 3 GB',
    expired: 'Good for higher usage',
  },
];

class TopupScreen extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header navigation={navigation} back icon="arrow-back" title="TOP-UP" />
    ),
  });

  constructor(props) {
    super(props);

    this.state = { checked: [false, false, false] };

    this.check = this.check.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  check(index) {
    const checks = [false, false, false];
    checks[index] = !checks[index];
    this.setState({ checked: checks });
  }

  nextPage() {
    this.props.navigation.navigate('orderSim');
  }

  render() {
    const {
      theme: { colors },
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapCaption}>
          <Caption style={styles.caption}>
            Flexible credits - any country, anytime
          </Caption>
        </View>
        {datas.map((card, index) => (
          <Surface style={styles.surface} key={card.id}>
            <View style={styles.card}>
              <Checkbox.Android
                status={this.state.checked[index] ? 'checked' : 'unchecked'}
                onPress={() => this.check(index)}
                color={colors.primary}
              ></Checkbox.Android>
              <View style={styles.grRight}>
                <Title style={styles.price}>{card.price}</Title>
                <Caption>{card.description}</Caption>
                <Caption>{card.expired}</Caption>
              </View>
            </View>
          </Surface>
        ))}

        <Surface style={styles.surface}>
          <View style={[styles.card, styles.package]}>
            <Title> Packages & Order SIM</Title>
          </View>
        </Surface>

        <XButton
          title="Continue"
          btnStyles={styles.btn}
          onPress={this.nextPage}
        />
      </ScrollView>
    );
  }
}
TopupScreen.propTypes = {
  theme: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapCaption: { justifyContent: 'center', flexDirection: 'row', padding: 20 },
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 15,
    borderRadius: 10,
  },
  card: { flexDirection: 'row', backgroundColor: '#fff', padding: 8 },
  grRight: { marginHorizontal: 10 },
  caption: { fontSize: 16 },
  surface: { elevation: 2.5, marginVertical: 15 },
  price: { fontWeight: 'bold' },
  package: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
  },
  btn: {
    marginTop: 40,
  },
});

export default withTheme(TopupScreen);
