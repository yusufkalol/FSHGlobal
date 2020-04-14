import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Text,
  Surface,
  Caption,
  Title,
  Subheading,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppStyles, colors} from '../Styles';

const JobDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
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
            <Caption style={styles.jobTask}>Job Task</Caption>
            <Text>LG-Machine Spare</Text>
            <Text style={styles.jobType}>NEW-SALE</Text>
          </View>
          <View style={styles.bookingWrapper}>
            <Caption style={AppStyles.fB50}>Booking for</Caption>
            <Caption style={AppStyles.fB40}>Job fees</Caption>
            <Text style={AppStyles.fB50}>20th Jan, 09-11:00</Text>
            <Text style={AppStyles.fB40}>
              200 / <Text style={{color: colors.skyBlue}}>Cash</Text>
            </Text>
          </View>
          <View style={styles.addressWrapper}>
            <Caption style={AppStyles.lightLabel}>My Address</Caption>
            <Text>
              Home, 140 Shraddha Apartment, Ashirwad Society, Near ICICI Bank,
              Vadodra, Landmark: Opp. Gandhi Statue
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.actionContainer}>
        {[
          ['cancel', 'Cancel'],
          ['cached', 'Reschedule'],
          ['account', 'Profile'],
        ].map(item => (
          <Surface style={styles.actionButton}>
            <Icon name={item[0]} size={20} style={{color: colors.textGrey}} />
            <Text style={styles.actionButtonText}>{item[1]}</Text>
          </Surface>
        ))}
      </View>
      <View style={styles.statusContainer}>
        <Subheading>Job Status</Subheading>
        <View style={styles.statusWrapper}>
          <View style={styles.statusItem}>
            <Icon name={'circle'} size={20} style={{color: 'green'}} />
            <Text>Booking Accepted</Text>
            <Caption>Booking accepted on 19th Jan 08:32</Caption>
          </View>
          <View style={styles.statusItem}>
            <Icon name={'circle'} size={20} style={{color: 'green'}} />
            <Text>Job in process</Text>
            <Caption>Booking accepted on 20th Jan 09:00 - 11:00</Caption>
          </View>
          <View style={styles.statusItem}>
            <Icon name={'circle'} size={20} style={{color: 'green'}} />
            <Text>Job Finished</Text>
            <Caption>Job Completed on 12:30 | Client Reviewed 4</Caption>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  /* Details Container Style */
  detailsContainer: {
    flex: 5,
    flexDirection: 'row',
    marginBottom: 3,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 5,
    backgroundColor: '#fff',
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
    width: '100%',
  },
  jobType: {
    marginLeft: 10,
    color: colors.skyBlue,
    fontSize: 12,
  },
  bookingWrapper: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
  },
  addressWrapper: {
    flex: 0,
    paddingRight: 10,
  },

  /* Action Container Style */
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginRight: 3,
  },
  actionButtonText: {
    paddingLeft: 10,
    color: colors.textGrey,
  },

  /* Status Container Style */
  statusContainer: {
    flex: 4,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 5,
  },
  statusWrapper: {
    flex: 0,
  },
  statusItem: {
    flexDirection: 'row',
  },
});
export default JobDetailsScreen;
