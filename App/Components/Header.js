import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class Header extends React.PureComponent {
  render() {
    const { navigation, title } = this.props;

    return (
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="subject" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title={title} style={styles.headerContent} />
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
  headerContent: {
    fontWeight: 'bold',
    color: '#000',
  },
});

Header.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.string,
};
