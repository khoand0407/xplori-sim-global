import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Surface } from 'react-native-paper';

import Header from '../../Components/Header';
import XButton from '../../Components/XButton';

const datas = [
  {
    id: 0,
    name: 'name',
    value: 'Leonard M Bishop',
    label: 'Name *',
  },
  {
    id: 1,
    name: 'phoneNumber',
    value: '+65 39879 343',
    label: 'Phone number *',
  },
  {
    id: 2,
    name: 'address',
    value: 'North Avenue',
    label: 'Address *',
  },
  {
    id: 3,
    name: 'utils',
    value: '',
    label: 'Apt, Suite, Building..',
  },
  {
    id: 4,
    name: 'city',
    value: 'Elkhorn',
    label: 'City *',
  },
  {
    id: 5,
    name: 'state',
    value: 'Nebraska',
    label: 'State',
  },
  {
    id: 6,
    name: 'coutry',
    value: 'United State Amarica',
    label: 'Country',
  },
  {
    id: 7,
    name: 'postalCode',
    value: '68022',
    label: 'Postal Code',
  },
];

function getInitState() {
  const st = {};
  datas.forEach(data => {
    st[data.name] = data.value;
  });

  return st;
}

class Order extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        navigation={navigation}
        back
        icon="arrow-back"
        title="ORDER SIM"
      />
    ),
  });

  constructor(props) {
    super(props);

    this.state = getInitState();

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.navigation.navigate('checkout');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Surface style={styles.surface}>
          <View style={styles.form}>
            {datas.map(data => (
              <TextInput
                key={data.id}
                label={data.label}
                value={this.state[data.name]}
                onChangeText={value => this.setState({ [data.name]: value })}
                style={styles.input}
              />
            ))}
            <XButton
              title="Confirm"
              btnStyles={styles.btn}
              onPress={this.nextPage}
            />
          </View>
        </Surface>
      </ScrollView>
    );
  }
}

Order.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 15,
    borderRadius: 10,
  },
  caption: { fontSize: 16 },
  surface: { elevation: 2, marginVertical: 15 },
  btn: {
    marginTop: 40,
  },
  form: {
    backgroundColor: '#fff',
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    marginVertical: 3,
  },
});

export default Order;
