/* @flow */

import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { Drawer, withTheme, Text, Avatar } from 'react-native-paper';

import { Images } from '../Themes';

const DrawerItemsData = [
  {
    label: 'Notifications',
    icon: 'tab-unselected',
    key: 0,
    route: 'Notify',
  },
  { label: 'Partner info', icon: 'people', key: 1, route: 'ParnerInfor' },
  { label: 'Your SIM', icon: 'sim-card', key: 2, route: 'YourSIM' },
  {
    label: 'Packages & Order',
    icon: 'move-to-inbox',
    key: 3,
    route: 'PackageOrder',
  },
  { label: 'Support & FAQ', icon: 'headset-mic', key: 4, route: 'SupportFAQ' },
];

class DrawerItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerItemIndex: 0,
    };

    this.setDrawerItem = this.setDrawerItem.bind(this);
    this.logout = this.logout.bind(this);
  }

  setDrawerItem(index) {
    this.setState({ drawerItemIndex: index });
    // navigate
    this.props.navigation.navigate(DrawerItemsData[index].route);
  }

  logout() {
    this.props.navigation.navigate('LaunchScreen');
  }

  render() {
    const { colors } = this.props.theme;

    return (
      <View style={[styles.drawerWrapper, { backgroundColor: colors.surface }]}>
        <ImageBackground style={styles.wrapAvatar} source={Images.bgDrawer}>
          <Avatar.Image
            size={60}
            source={Images.avatar}
            style={styles.avatar}
          />
          <Text style={styles.txtAvatar}>Brittany Lancaster</Text>
        </ImageBackground>
        <View style={styles.drawerContent}>
          <Drawer.Section>
            {DrawerItemsData.map((props, index) => (
              <Drawer.Item
                label={props.label}
                icon={props.icon}
                key={props.key}
                theme={colors}
                active={this.state.drawerItemIndex === index}
                onPress={() => this.setDrawerItem(index)}
              />
            ))}
          </Drawer.Section>

          <Drawer.Section>
            <Drawer.Item
              label="Logout"
              theme={colors}
              icon="input"
              onPress={this.logout}
            />
          </Drawer.Section>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerWrapper: {
    flex: 1,
  },
  wrapAvatar: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  avatar: {
    borderColor: '#fff',
    left: '40%',
    marginTop: 20,
  },
  drawerContent: {
    flex: 3,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  txtAvatar: {
    color: '#fff',
    left: '30%',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

DrawerItems.propTypes = {
  surface: PropTypes.string,
  theme: PropTypes.object,
  navigation: PropTypes.object,
};

export default withTheme(DrawerItems);
