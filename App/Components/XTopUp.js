import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Caption, Headline, Surface } from 'react-native-paper';

import XButton from './XButton';

function Banner(props) {
  const { hideBanner } = props;

  return (
    <View style={styles.wrap}>
      <View style={styles.bannerContent}>
        <Caption style={styles.caption}>Wallet Balance</Caption>
        <View style={styles.actionTopup}>
          <Headline style={styles.headeLine}>$ 12,00</Headline>
          <Surface style={styles.surface}>
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
  }

  render() {
    const { visible } = this.state;

    return visible ? (
      <Surface style={styles.surface}>
        <Banner hideBanner={this.onPress} />
      </Surface>
    ) : null;
  }
}

const styles = StyleSheet.create({
  surface: {
    elevation: 4,
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
  headeLine: { fontSize: 36, paddingTop: 10, marginLeft: 10, marginRight: 70 },
  wrap: { backgroundColor: '#E7EBF0' },
});

export default XTopUp;
