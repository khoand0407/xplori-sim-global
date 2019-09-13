import React from 'react';
import { ScrollView, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Headline,
  Caption,
  Surface,
  TextInput,
  Checkbox,
  withTheme,
  Button,
} from 'react-native-paper';

import { Images } from '../../Themes';

// Styles
import styles from './LaunchScreenStyles';

import XButton from '../../Components/XButton';
import XDevider from './XDivider';

class LaunchScreen extends React.Component {
  /* eslint-disable no-undef */
  // static navigationOptions = {
  //   headerMode: 'none',
  // };

  constructor(props) {
    super(props);

    this.state = {
      email: 'maxx16t@gmail.com',
      password: 'xploriappglobal',
      checked: false,
    };

    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.check = this.check.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  changeEmail(email) {
    this.setState({ email });
  }

  changePass(password) {
    this.setState({ password });
  }

  check() {
    this.setState(state => ({ checked: !state.checked }));
  }

  signUp() {
    // redirect to home screen
    this.props.navigation.navigate('Timeline');
  }

  render() {
    const { checked } = this.state;
    const {
      theme: { colors },
    } = this.props;

    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.top}></View>
        <ScrollView style={styles.container}>
          <Surface style={[styles.surface, styles.signUpForm]}>
            <View style={styles.wrapTitle}>
              <Headline style={styles.titleSignUp}>SIGN UP</Headline>
              <Button disabled uppercase={false} style={styles.btnSkip}>
                Skip
              </Button>
            </View>
            <View style={styles.form}>
              <TextInput
                label="Email"
                style={styles.input}
                value={this.state.email}
                onChangeText={this.changeEmail}
              />
              <TextInput
                label="Password"
                secureTextEntry
                style={[styles.input, styles.space]}
                value={this.state.password}
                onChangeText={this.changePass}
                clearButtonMode="always"
              />
            </View>
            <View style={styles.extend}>
              <View style={styles.wrapCheckbox}>
                <Checkbox.Android
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={this.check}
                  color={colors.primary}
                />
                <Caption style={styles.titleCb}>Save password</Caption>
              </View>
              <Caption style={[styles.titleCb, styles.fgPass]}>
                Forgot password?
              </Caption>
            </View>
            <View style={styles.groupBtn}>
              <XButton disabled title="Sign In" />
              <View style={styles.spaceBtn}></View>
              <XButton
                title="Sign Up"
                color="#56ACF9"
                textColor="#fff"
                onPress={this.signUp}
              />
            </View>
            <XDevider title="or" />
            <View style={styles.groupBtn}>
              <XButton title="Sign In With Facebook" color="#3466D9" />
            </View>
          </Surface>
        </ScrollView>
      </View>
    );
  }
}

LaunchScreen.propTypes = {
  theme: PropTypes.object,
  navigation: PropTypes.object,
};

export default withTheme(LaunchScreen);
