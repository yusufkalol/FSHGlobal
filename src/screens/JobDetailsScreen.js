import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text, Surface} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JobDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Avatar.Image
          size={56}
          source={require('../assets/profiles/profile-001.jpg')}
        />
        <View style={styles.jobDescription}>
          <View style={styles.nameWrapper}>
            <Text style={styles.customerName}>Alizam Smith</Text>
            <Icon
              name="chat"
              size={24}
              style={[{padding: 5}, {paddingRight: 20}]}
            />
          </View>
          <View style={styles.jobTaskWrapper}>
            <Text style={styles.jobTask}>Job Task</Text>
            <Text>LG-Machine Spare</Text>
            <Text style={[{paddingLeft: 15}, {color: '#87CEEB'}]}>
              NEW-SALE
            </Text>
          </View>
          <View style={styles.bookingWrapper}>
            <Text style={styles.bookingChild}>AAAA</Text>
            <Text style={styles.bookingChild}>BBBB</Text>
            <Text style={styles.bookingChild}>CCCC</Text>
            <Text style={styles.bookingChild}>DDDD</Text>
            {/* <Text style={styles.bookingChild}>B</Text>
            <Text style={styles.bookingChild}>C</Text>
            <Text style={styles.bookingChild}>DDDDDD</Text> */}
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text>Reschedule</Text>
      </View>
      <View style={{flex: 3}}>
        <Text>Status</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 5,
  },
  subContainer1: {
    flex: 3,
    flexDirection: 'row',
  },
  jobDescription: {
    flex: 1,
    marginLeft: 15,
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customerName: {
    fontWeight: 'bold',
  },
  jobTaskWrapper: {
    flex: 0,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  jobTask: {
    color: '#464646',
    fontSize: 12,
    width: '100%',
  },
  bookingWrapper: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bookingChild: {
    flexBasis: '50%',
  },
});
export default JobDetailsScreen;
