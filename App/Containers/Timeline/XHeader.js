import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const tabs = [
  {
    index: 1,
    title: 'TIMELINE',
  },
  {
    index: 2,
    title: 'ESSENTIALS',
  },
];

class XHeader extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 1,
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(index) {
    this.props.navigation.getParam('onSelectTab')(index);

    this.setState({ selectedTab: index });
  }

  render() {
    const { navigation } = this.props;
    const { selectedTab } = this.state;

    return (
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="subject" onPress={() => navigation.openDrawer()} />
        <View style={styles.tabs}>
          {tabs.map(tab => {
            const isSelectTab = selectedTab === tab.index;
            return (
              <Button
                key={tab.index}
                color={isSelectTab ? 'black' : 'gray'}
                style={isSelectTab ? styles.tab : {}}
                onPress={() => this.changeTab(tab.index)}
              >
                {tab.title}
              </Button>
            );
          })}
        </View>
      </Appbar.Header>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  tabs: {
    marginLeft: 30,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  tab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
});

XHeader.propTypes = {
  navigation: PropTypes.object,
};

export default XHeader;
