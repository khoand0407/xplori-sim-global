import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.pressIcon = this.pressIcon.bind(this);
  }

  pressIcon() {
    const { navigation, back } = this.props;

    if (back) {
      navigation.goBack();
    } else {
      navigation.openDrawer();
    }
  }

  render() {
    const { title, icon } = this.props;

    return (
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon={icon} onPress={this.pressIcon} />
        <Appbar.Content title={title} style={styles.headerContent} />
        {this.props.children}
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
    justifyContent: 'space-between',
  },
  headerContent: {
    fontWeight: 'bold',
    color: '#000',
  },
  textAction: { marginRight: 5 },
});

Header.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.string,
  icon: PropTypes.string,
  back: PropTypes.bool,
  children: PropTypes.any,
};

Header.defaultProps = {
  icon: 'subject',
  back: false,
};
