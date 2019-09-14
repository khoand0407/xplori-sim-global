import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Caption, TextInput, List } from 'react-native-paper';

import Header from '../../Components/Header';
import XButton from '../../Components/XButton';

const datas = [
  {
    id: 0,
    title: 'Setup',
    child: [],
  },
  {
    id: 1,
    title: 'Troubleshoot',
    child: [],
  },
  {
    id: 2,
    title: 'SIM',
    child: [],
  },
  {
    id: 3,
    title: 'Pocket wifi',
    child: [],
  },
  {
    id: 4,
    title: 'Credits & Packages',
    child: [],
  },
  {
    id: 5,
    title: 'Payments',
    child: [],
  },
];

class SupportFAQScreen extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation} title="SUPPORT & FAQ" />,
  });

  constructor(props) {
    super(props);

    this.state = { email: '', comment: '' };

    this.changeEmail = this.changeEmail.bind(this);
    this.changeComment = this.changeComment.bind(this);
  }

  changeEmail(email) {
    this.setState({ email });
  }

  changeComment(comment) {
    this.setState({ comment });
  }

  render() {
    return (
      <ScrollView style={styles.contaner}>
        <View style={styles.form}>
          <Caption style={styles.caption}>USER ID: 219 999 30108</Caption>
          <TextInput
            label="Your email"
            value={this.state.email}
            onChangeText={this.changeEmail}
            style={styles.email}
          />
          <TextInput
            label="Request/ Comment"
            value={this.state.comment}
            onChangeText={this.changeComment}
            style={[styles.email, styles.multiLine]}
            multiline
            numberOfLines={3}
          />
          <XButton title="Submit" onPress={() => {}} btnStyles={styles.btn} />
        </View>
        <Caption style={styles.faq}>FAQ</Caption>
        <View style={styles.form}>
          {datas.map(data => (
            <List.Accordion key={data.id} title={data.title}>
              <List.Item title="First item" />
              <List.Item title="Second item" />
            </List.Accordion>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  faq: {
    marginHorizontal: 20,
    fontSize: 26,
    paddingTop: 20,
    fontWeight: '400',
  },
  contaner: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  form: {
    margin: 20,
    backgroundColor: '#fff',
    padding: 12,
    flex: 1,
  },
  email: { borderRadius: 5, marginVertical: 5, backgroundColor: '#F1F3F6' },
  multiLine: { height: 100 },
  caption: { fontSize: 16, marginVertical: 10, fontWeight: '400' },
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
