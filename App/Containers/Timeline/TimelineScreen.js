import React from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { List, Title, Caption, Headline, Button } from 'react-native-paper';

import * as Timer from '../../utils/Timer';
import Loader from '../../Components/Loader';
import XTopUp from '../../Components/XTopUp';
import { Images } from '../../Themes';
const datas = [
  {
    id: 1,
    title: 'The 16 Best Hidden Beaches Of Costa Rica',
    date: '21/02/2019',
  },
  {
    id: 2,
    title: '5 Famous Movie Shots in Costa Rica',
    date: '21/02/2019',
  },
  {
    id: 3,
    title: 'Do You Know Our Exotic',
    date: '21/02/2019',
  },
];
const screenWidth = Math.round(Dimensions.get('window').width);

class TimeLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: true,
    };
  }

  async componentDidMount() {
    // sleep 1s, show loading
    await Timer.sleep(1000);

    this.setState({ load: false });
  }

  render() {
    const { load } = this.state;
    return (
      <View>
        {load ? (
          <Loader />
        ) : (
          <ScrollView>
            <XTopUp />
            <ImageBackground source={Images.beach} style={styles.mediaHead}>
              <View style={styles.wrapHeadline}>
                <Headline style={styles.headLine}>Costa Rica</Headline>
                <Button
                  icon="image"
                  color="gray"
                  style={styles.countImageTitle}
                >
                  01/24
                </Button>
              </View>
            </ImageBackground>
            <List.Section>
              <List.Subheader>News & Video</List.Subheader>
              {datas.map(data => (
                <List.Item
                  key={data.id}
                  right={props => (
                    /* eslint-disable react/jsx-props-no-spreading */
                    <View {...props} style={styles.wrapRightItem}>
                      <Title style={styles.title}>{data.title}</Title>
                      <Caption>{data.date}</Caption>
                    </View>
                  )}
                  left={props => (
                    <ImageBackground
                      {...props}
                      source={Images.avatar}
                      style={styles.imageMediaItem}
                    />
                  )}
                />
              ))}
            </List.Section>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageMediaItem: { width: 120, height: 83 },
  wrapRightItem: { justifyContent: 'space-between', width: screenWidth * 0.6 },
  title: { flexWrap: 'wrap', fontSize: 18 },
  mediaHead: { height: 200, justifyContent: 'flex-end' },
  headLine: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 28,
  },
  wrapHeadline: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
  },
  countImageTitle: {
    marginRight: 260,
  },
});

export default TimeLine;
