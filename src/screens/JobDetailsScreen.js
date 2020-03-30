import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Text, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppStyles, colors} from '../Styles';
import {LightLabel} from '../components/Text/LightLabel';

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
            <LightLabel style={[AppStyles.lightLabel, styles.jobTask]}>
              Job Task
            </LightLabel>
            <Text>LG-Machine Spare</Text>
            <Text style={[{paddingLeft: 15}, {color: colors.skyBlue}]}>
              NEW-SALE
            </Text>
          </View>
          <View style={styles.bookingWrapper}>
            <LightLabel style={AppStyles.fB50}>Booking for</LightLabel>
            <LightLabel style={AppStyles.fB40}>Job fees</LightLabel>
            <Text style={AppStyles.fB50}>20th Jan, 09-11:00</Text>
            <Text style={AppStyles.fB40}>
              200 / <Text style={{color: colors.skyBlue}}>Cash</Text>
            </Text>
          </View>
          <View style={styles.addressWrapper}>
            <LightLabel style={AppStyles.lightLabel}>My Address</LightLabel>
            <Text>
              Home, 140 Shraddha Apartment, Ashirwad Society, Near ICICI Bank,
              Vadodra, Landmark: Opp. Gandhi Statue
            </Text>
          </View>
        </View>
      </View>
      <Divider style={{height: 3}} />
      <View style={styles.actionContainer}>
        {[
          ['cancel', 'Cancel'],
          ['cached', 'Reschedule'],
          ['account', 'Profile'],
        ].map(item => (
          <TouchableOpacity style={styles.actionButton}>
            <Icon name={item[0]} size={20} style={{color: colors.textGrey}} />
            <Text style={[{paddingLeft: 10}, {color: colors.textGrey}]}>
              {item[1]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Divider style={{height: 3}} />
      <View style={{flex: 3}}>
        <Text>Status</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  detailsContainer: {
    flex: 3,
    flexDirection: 'row',
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 5,
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
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 3,
    borderColor: colors.textGrey,
  },
});
export default JobDetailsScreen;
