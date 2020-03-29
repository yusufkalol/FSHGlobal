import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Avatar, Text} from 'react-native-paper';

class RequestItem extends Component {
  render() {
    const {
      customerName,
      profileUri,
      requestDate,
      sparePart,
      saleType,
      requestStatus,
    } = this.props.item;
    const myUri = '../assets/profiles/profile-002.jpg'; // success
    return (
      <View style={styles.container}>
        <Avatar.Image
          size={48}
          source={{
            uri: profileUri,
          }}
          // style={{width: 50, height: 50, borderRadius: 50}}
        />
        <View style={styles.requestDetails}>
          <View style={styles.nameDateRow}>
            <Text style={styles.name}>{customerName}</Text>
            <Text style={styles.date}>{requestDate}</Text>
          </View>
          <View style={styles.orderRow}>
            <Text style={styles.sparePart}>{sparePart}</Text>
            <Text style={styles.saleType}>{saleType}</Text>
            <Text style={{color: '#1B047C'}}>{requestStatus}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#eee',
    backgroundColor: '#fff',
    borderRadius: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  requestDetails: {
    flex: 3,
    // justifyContent: 'space-around',
    marginLeft: 10,
  },
  nameDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    color: '#464646',
    fontSize: 12,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saleType: {
    color: '#87CEEB',
  },
  sparePart: {
    color: '#464646',
  },
});

export default RequestItem;
