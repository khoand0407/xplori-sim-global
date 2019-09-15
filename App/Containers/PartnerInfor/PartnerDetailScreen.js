import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';

import Header from '../../Components/Header';
import XButton from '../../Components/XButton';

import { screenWidth } from '../../utils/measure';

const datas = [
  {
    id: 0,
    image: 'https://picsum.photos/701',
    title: 'Nearby Nightclubs',
    content: `Get exclusive, behind-the-scenes access to the world headquarters of CNN with this tour experience. You will take a 50-minute walking tour with your very own guide through the halls of CNN Center and get an inside look at how a live broadcast is produced and sent to viewers all over the world. You will also get a more in-depth look at how the world’s largest news organization operates. `,
  },
  {
    id: 1,
    image: 'https://picsum.photos/608',
    title: 'On The Rocks Bar',
    content: `There's a trove of material for each campaign to mine to tweak the weaknesses of rival candidates. And President Donald Trump's team must have been watching with glee as comment on guns and health care piled up material for general election attack ads.`,
  },
  {
    id: 2,
    image: 'https://picsum.photos/605',
    title: 'Spice Restaurant',
    content: `Thursday's encounter in Houston exposed ideological, personal and policy divisions between the candidates that offer clues about how the Democratic race will unfold from now on.`,
  },
];

class PartnerDetailScreen extends React.Component {
  /* eslint-disable no-undef */
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        navigation={navigation}
        title="SOLITAIRE SUKHUMVIT"
        back
        icon="arrow-back"
      />
    ),
  });

  constructor(props) {
    super(props);

    this.ratingCompleted = this.ratingCompleted.bind(this);
  }

  ratingCompleted() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {datas.map(data => (
            <Card key={data.id}>
              <Card.Cover source={{ uri: data.image }} />
              <Card.Content>
                <View style={styles.grActionCard}>
                  <View style={styles.start}>
                    <Title>{data.title}</Title>
                    <View style={styles.rate}>
                      <AirbnbRating
                        onFinishRating={this.ratingCompleted}
                        size={18}
                        showRating={false}
                      />
                    </View>
                  </View>
                  <View style={styles.wrapBtn}>
                    <XButton title="BOOKING" btnStyles={styles.btn} />
                  </View>
                </View>

                <Paragraph style={styles.content}>{data.content}</Paragraph>
              </Card.Content>
            </Card>
          ))}

          <View style={styles.btnChat}>
            <XButton title="CHAT NOW" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 12 },
  content: { color: 'gray', fontSize: 16 },
  grActionCard: { flexDirection: 'row', marginVertical: 10 },
  wrapBtn: { flex: 1 },
  btnChat: { marginVertical: 50 },
  start: { flex: 2 },
  rate: { justifyContent: 'flex-start', flexDirection: 'row' },
  btn: { margin: 5, flex: 1, width: screenWidth * 0.3 },
});

export default PartnerDetailScreen;
