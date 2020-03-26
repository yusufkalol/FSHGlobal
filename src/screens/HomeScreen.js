import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {gridData} from '../assets/Data';
import HomeGridItem from '../components/HomeGridItem';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={gridData}
          renderItem={({item}) => <HomeGridItem gridItem={item} />}
          numColumns={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
});

export default HomeScreen;
