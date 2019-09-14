import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { Caption } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2932',
    title: 'Third',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2fff72',
    title: 'Four',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29dffsfe2',
    title: 'Fire',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
Item.propTypes = {
  title: PropTypes.string,
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Caption style={styles.caption}>Sights</Caption>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginBottom: 30,
  },
  item: {
    backgroundColor: '#82AAE0',
    marginVertical: 8,
    marginHorizontal: 16,
    height: 150,
    width: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    padding: 5,
  },
  caption: { fontSize: 18, marginBottom: 10 },
});
