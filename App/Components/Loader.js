import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import { screenWidth } from '../utils/measure';

const items = [1, 2, 3];

const LoadableUI = () => (
  <View style={styles.media}>
    <Placeholder Animation={Fade} style={styles.video}>
      <PlaceholderMedia size={120} isRound={false} style={styles.mediaItem} />
    </Placeholder>
    {items.map(it => (
      <Placeholder
        Animation={Fade}
        Left={() => <PlaceholderMedia size={100} style={styles.mediaLeft} />}
        key={it}
        style={styles.item}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
    ))}
  </View>
);

const styles = StyleSheet.create({
  media: {
    marginTop: 10,
    padding: 10,
  },
  video: {
    marginBottom: 20,
  },
  mediaItem: {
    width: screenWidth - 10 * 2,
  },
  item: {
    marginVertical: 5,
  },
  mediaLeft: {
    marginHorizontal: 5,
  },
});

export default LoadableUI;
