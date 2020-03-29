import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeGridItem extends Component {
  render() {
    const {gridItem, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          gridItem.itemName === 'New Ticket' && navigation.push('JobDetails')
        }>
        <Icon
          style={styles.iconAlignment}
          name={gridItem.icon.iconName}
          size={30}
          color={gridItem.icon.iconColor}
        />
        <Text>{gridItem.itemName}</Text>
        <Text style={styles.count}>{gridItem.count}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    marginBottom: 2,
    borderRadius: 5,
    borderColor: '#CED0CE',
    padding: 20,
    paddingBottom: 5,
  },
  count: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '200',
  },
  iconAlignment: {
    justifyContent: 'center',
  },
});

export default HomeGridItem;
