import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Caption } from 'react-native-paper';

function XDevider(props) {
  const { title } = props;

  return (
    <View style={styles.divider}>
      <View style={styles.item} />
      <Caption>{title}</Caption>
      <View style={styles.item} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    borderColor: '#000',
    width: 30,
    height: 13,
  },
});

XDevider.propTypes = {
  title: PropTypes.string,
};

export default XDevider;
