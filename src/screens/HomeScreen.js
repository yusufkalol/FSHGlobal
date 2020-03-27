import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import HomeGridItem from '../components/HomeGridItem';
import {loadHomeGrid} from '../redux/actions/HomeGridAction';

const HomeScreen = ({homeGrid, loadHomeGrid}) => {
  useEffect(() => {
    loadHomeGrid();
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={homeGrid}
        renderItem={({item}) => <HomeGridItem gridItem={item} />}
        numColumns={3}
      />
    </View>
  );
};

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

function mapStateToProps(state, ownProps) {
  return {
    homeGrid: state.homeGrid,
  };
}

const mapDispatchToProps = {
  loadHomeGrid,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
