import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import XHeader from './XHeader';

import TimeLineScreen from './TimelineScreen';
import EssentialsScreen from './EssentialsScreen';

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

  componentDidMount() {
    this.props.navigation.setParams({
      onSelectTab: this.changeTab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <View>
        {selectedTab === 1 ? (
          /* eslint-disable react/jsx-props-no-spreading */
          /** inject navigation to child screen */
          <TimeLineScreen {...this.props} />
        ) : (
          <EssentialsScreen {...this.props} />
        )}
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
