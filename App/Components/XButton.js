import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

import XploriColor from '../Themes/Colors';

function XButton(props) {
  const { disabled, title, color, textColor, onPress } = props;

  return (
    <Button
      mode="contained"
      style={styles.btn}
      disabled={disabled}
      color={color}
      onPress={onPress}
    >
      {textColor ? (
        <Text style={{ color: textColor, textTransform: 'uppercase' }}>
          {title}
        </Text>
      ) : (
        title
      )}
    </Button>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 3,
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
  },
});

XButton.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
};

XButton.defaultProps = {
  disabled: false,
  color: XploriColor.primary,
};

export default XButton;
