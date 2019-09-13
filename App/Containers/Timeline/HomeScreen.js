import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Alert } from 'react-native';

import XHeader from './XHeader';
import * as Timer from '../../utils/Timer';

class Home extends React.PureComponent {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: <XHeader navigation={navigation} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(index) {
    this.setState({ selectedTab: index });
  }

  async componentDidMount() {
    this.props.navigation.setParams({
      onSelectTab: this.changeTab,
    });

    await Timer.sleep(5000);
    Alert.alert('hi');
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <View>
        {selectedTab === 1 ? <Text>TIMELINE</Text> : <Text>ESSENTIALS</Text>}
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
