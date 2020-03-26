import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import RequestItem from '../components/RequestItem';
import {newRequest, upcomingRequest} from '../assets/RequestData';
class UpcomingRequests extends Component {
  getItemSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'New Job Requests', data: newRequest},
            {title: 'Upcoming Accepted Jobs', data: upcomingRequest},
          ]}
          renderItem={({item}) => <RequestItem item={item} />}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.getItemSeparator}
          //TODO: implement ListHeaderComponent
          // ListHeaderComponent={this.getListHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default UpcomingRequests;
