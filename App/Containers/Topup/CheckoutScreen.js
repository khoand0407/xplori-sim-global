import React from 'react';
// import PropTypes from 'prop-types';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Surface, Caption, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    name: 'email',
    value: '',
    label: 'Email - (optional to recive confirmation message)',
  },
  {
    id: 2,
    name: 'address',
    value: '4664 North Avenue',
    label: 'Card Number *',
  },
  {
    hasChild: true,
    child: [
      { id: 3, name: 'date', value: '', label: 'MM/YY *' },
      {
        id: 4,
        name: 'cvc',
        value: '',
        label: 'CVC/CVV *',
      },
    ],
  },
  {
    id: 5,
    name: 'couponCode',
    value: '68022',
    label: 'Coupon Code',
  },
];

function getInitState() {
  const st = {};
  datas.forEach(data => {
    st[data.name] = data.value;
  });

  return st;
}

class Checkout extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header navigation={navigation} back icon="arrow-back" title="CHECKOUT" />
    ),
  });

  constructor(props) {
    super(props);

    this.state = getInitState();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.grCard}>
            <Caption style={styles.headTextPrice}>
              Amount to pay: USD 10.00
            </Caption>
          </View>
          <View style={styles.grCard}>
            <Title>Safe and Secure SSL Encryteed</Title>
          </View>
          <View style={styles.grCard}>
            <Icon name="cc-visa" style={styles.flag} />
            <Icon name="cc-mastercard" style={styles.flag} />
            <Icon name="cc-amex" style={styles.flag} />
          </View>
        </View>

        <Surface style={styles.surface}>
          <View style={styles.form}>
            {datas.map(data => {
              let childs = [];
              const { hasChild } = data;
              if (hasChild === true) {
                childs = data.child;
              }

              return !hasChild ? (
                <TextInput
                  key={data.id}
                  label={data.label}
                  value={this.state[data.name]}
                  onChangeText={value => this.setState({ [data.name]: value })}
                  style={styles.input}
                />
              ) : (
                <View style={styles.grInput} key={childs[0].id}>
                  <TextInput
                    label={childs[0].label}
                    value={this.state[childs[0].name]}
                    onChangeText={value =>
                      this.setState({ [childs[0].name]: value })
                    }
                    style={styles.inputRow}
                  />
                  <View style={styles.space} />
                  <TextInput
                    label={childs[1].label}
                    value={this.state[childs[1].name]}
                    onChangeText={value =>
                      this.setState({ [childs[1].name]: value })
                    }
                    style={styles.inputRow}
                  />
                </View>
              );
            })}
            <XButton title="Submit" btnStyles={styles.btn} />
          </View>
        </Surface>
        <View style={styles.footer}>
          <Title>Powered by</Title>
          <Icon name="cc-stripe" style={styles.flag} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 15,
    borderRadius: 10,
  },
  grCard: { justifyContent: 'center', flexDirection: 'row' },
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
  grInput: { flexDirection: 'row', justifyContent: 'space-between' },
  inputRow: {
    backgroundColor: '#fff',
    marginVertical: 3,
    flex: 2,
  },
  space: {
    flex: 1,
  },
  flag: { fontSize: 46, marginHorizontal: 8 },
  headTextPrice: {
    fontSize: 18,
    marginVertical: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default Checkout;
