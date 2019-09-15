import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Headline, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Images } from '../../Themes';

const dateWeather = [
  {
    id: 0,
    from: 19,
    to: 22,
    icon: 'weather-rainy',
    date: '27/09',
  },
  {
    id: 2,
    from: 23,
    to: 27,
    icon: 'weather-partlycloudy',
    date: '28/09',
  },
  {
    id: 3,
    from: 23,
    to: 27,
    icon: 'weather-sunny',
    date: '29/09',
  },
];

function WeatherItem(props) {
  const { from, to, icon, date, between } = props;

  const border = between ? styles.border : {};

  return (
    <View style={[styles.wrapWeatherItem, border]}>
      <View style={styles.groupItem}>
        <Title style={styles.date}>{date}</Title>
        <Icon name={icon} style={styles.weatherItemIcon} />
      </View>

      <View style={styles.rangeWaether}>
        <Degree
          degree={from}
          styleNum={styles.styleNum}
          styleDe={styles.styleDe}
        />
        <View style={styles.spaceBetween} />
        <Degree
          degree={to}
          styleNum={styles.styleNum}
          styleDe={styles.styleDe}
        />
      </View>
    </View>
  );
}

WeatherItem.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  icon: PropTypes.string,
  date: PropTypes.string,
  between: PropTypes.bool,
};

function Degree(props) {
  const { degree, styleNum, styleDe } = props;

  return (
    <View style={styles.wrapTemp}>
      <Headline style={[styles.weatherText, styleNum]}>{degree}</Headline>
      <Headline style={[styles.weatherDegree, styleDe]}>o</Headline>
      <Headline style={[styles.weatherText, styleNum]}>C</Headline>
    </View>
  );
}

Degree.propTypes = {
  degree: PropTypes.number,
  styleNum: PropTypes.object,
  styleDe: PropTypes.object,
};

class Weather extends React.PureComponent {
  render() {
    return (
      <ImageBackground source={Images.bgWeather} style={styles.wrap}>
        <View>
          <View style={styles.weatherHead}>
            <Icon name="weather-lightning" style={styles.weatherRain} />
            <View>
              <Degree degree={21} />
              <Headline style={styles.txtLocation}>COSTA RICA</Headline>
            </View>
          </View>
          <View style={styles.wrapListItem}>
            {dateWeather.map((item, index) => (
              /* eslint-disable react/jsx-props-no-spreading */
              <WeatherItem key={item.id} {...item} between={index === 1} />
            ))}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  weatherDegree: { lineHeight: 18, color: '#fff' },
  weatherText: { color: '#fff', fontSize: 42, paddingTop: 10, lineHeight: 30 },
  wrapTemp: { flexDirection: 'row' },
  wrap: { height: 300, alignItems: 'center', justifyContent: 'center' },
  weatherRain: { fontSize: 100, color: '#fff', marginRight: 20 },
  weatherHead: { flexDirection: 'row', justifyContent: 'center' },
  txtLocation: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  // item
  weatherItemIcon: { color: '#fff', fontSize: 50 },
  date: { color: '#fff' },
  rangeWaether: { flexDirection: 'row' },
  spaceBetween: { marginHorizontal: 10 },
  wrapWeatherItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  groupItem: { justifyContent: 'center' },
  styleNum: { fontSize: 16, lineHeight: 13, fontWeight: 'bold' },
  styleDe: { fontSize: 10, lineHeight: 12, fontWeight: 'bold' },
  wrapListItem: { flexDirection: 'row' },
  border: {
    borderLeftWidth: 0.8,
    borderRightWidth: 0.8,
    borderColor: '#B2B5B9',
    paddingHorizontal: 8,
  },
});

export default Weather;
