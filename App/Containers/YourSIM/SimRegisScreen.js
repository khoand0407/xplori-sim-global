import React from 'react';
// import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import { Surface, Caption, Button } from 'react-native-paper';

import Header from '../../Components/Header';
import XButton from '../../Components/XButton';
import { Images } from '../../Themes';
import Colors from '../../Themes/Colors';

import { screenWidth } from '../../utils/measure';

class SimRegis extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        navigation={navigation}
        back
        icon="arrow-back"
        title="SIM REGISTRATION"
      >
        <Button
          uppercase={false}
          color="#000"
          onPress={() => navigation.goBack()}
        >
          Skip
        </Button>
      </Header>
    ),
  });

  constructor(props) {
    super(props);

    this.state = { digitSim: '30108' };

    this.changeDigit = this.changeDigit.bind(this);
  }

  changeDigit(digitSim) {
    this.setState({ digitSim });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={Images.barcodeScan}
          style={styles.barcodeScan}
          resizeMode="stretch"
        />
        <View style={styles.wrapFind}>
          <Caption style={styles.guide}>
            Scan the barcode to continue registration or manually input the last
            5 digist of SIM ICCID. You can find the barcode and the number on
            the back of SIM given to you
          </Caption>
          <ImageBackground
            source={Images.simBarcode}
            style={styles.simBarcode}
            resizeMode="stretch"
          />
        </View>
        <Surface style={styles.surface}>
          <View style={styles.wrapText}>
            <Caption style={styles.bigText}>CAN&apos;T SCAN BARCODE</Caption>
          </View>
          <View style={styles.wrapText}>
            <Caption style={styles.smallText}>
              Please input the last 5 digits of SIM ICCID in text box
            </Caption>
          </View>
          <View style={styles.wrapInput}>
            <TextInput
              onChangeText={this.changeDigit}
              value={this.state.digitSim}
              style={styles.input}
            />
          </View>
          <View style={styles.form}>
            <Button style={styles.btnLate} disabled>
              DO IT LATE
            </Button>
            <XButton title="Continue" />
          </View>
        </Surface>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  guide: { flex: 1, marginRight: 10 },
  wrapFind: { flexDirection: 'row', margin: 20 },
  simBarcode: { height: 120, flex: 1 },
  btnLate: { marginTop: 5, marginRight: 10 },
  barcodeScan: { height: 250 },
  container: {
    backgroundColor: '#F5F7FA',
  },
  surface: { elevation: 1, marginHorizontal: 15, paddingVertical: 35 },
  form: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  wrapText: { flexDirection: 'row', justifyContent: 'center' },
  wrapInput: { marginHorizontal: 20 },
  bigText: { fontSize: 18 },
  smallText: { fontSize: 12 },
  input: {
    color: Colors.primary,
    backgroundColor: '#E8EAEE',
    marginTop: 30,
    textAlign: 'center',
    alignSelf: 'center',
    height: 50,
    width: screenWidth * 0.8,
    borderRadius: 5,
    letterSpacing: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SimRegis;
