import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeGridItem extends Component {
  render() {
    const {gridItem} = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name={gridItem.icon.iconName}
          size={30}
          color={gridItem.icon.iconColor}
        />
        <Text>{gridItem.itemName}</Text>
        <Text style={styles.count}>{gridItem.count}</Text>
      </View>
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
    alignSelf: 'flex-end',
  },
});

export default HomeGridItem;
