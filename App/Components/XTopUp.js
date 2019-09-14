import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Caption, Headline, Surface } from 'react-native-paper';

import XButton from './XButton';

function Banner(props) {
  const { hideBanner } = props;

  return (
    <View style={styles.wrap}>
      <View style={[styles.bannerContent, styles.shawdow]}>
        <Caption style={styles.caption}>Wallet Balance</Caption>
        <View style={styles.actionTopup}>
          <View style={styles.wrapMoney}>
            <Headline style={styles.symboy}>$</Headline>
            <Headline style={styles.headeLine}>12,00</Headline>
          </View>

          <Surface style={[styles.surface, styles.shawdow]}>
            <XButton
              title="TOP-UP"
              onPress={hideBanner}
              btnStyles={styles.btn}
            />
          </Surface>
        </View>
      </View>
    </View>
  );
}
Banner.propTypes = {
  hideBanner: PropTypes.func,
};

class XTopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.setState({ visible: false });
    this.props.onRedirectToTopUp();
  }

  render() {
    const { visible } = this.state;

    return visible ? <Banner hideBanner={this.onPress} /> : null;
  }
}

const styles = StyleSheet.create({
  shawdow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  symboy: { marginLeft: 10, fontWeight: 'bold' },
  wrapMoney: { flexDirection: 'row' },
  surface: {
    elevation: 3,
  },
  bannerContent: {
    borderRadius: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  caption: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '900',
  },
  actionTopup: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
  },
  btn: { flex: 1, paddingHorizontal: 15 },
  headeLine: {
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 70,
  },
  wrap: { backgroundColor: '#F5F7FA' },
});

XTopUp.propTypes = {
  onRedirectToTopUp: PropTypes.func,
};

export default XTopUp;
