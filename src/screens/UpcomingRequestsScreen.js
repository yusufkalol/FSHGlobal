import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRequests} from '../redux/actions/RequestsActions';

import {View, StyleSheet, SectionList} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import RequestItem from '../components/RequestItem';
// import {newRequest, upcomingRequest} from '../assets/RequestData';

const UpcomingRequestsScreen = ({loadRequests, requests}) => {
  useEffect(() => {
    console.log(requests);
    loadRequests().catch(error => {
      alert('Loading requests failed ' + error);
    });
  }, []);

  getItemSeparator = () => <Divider style={{height: 3}} />;

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'New Job Requests', data: requests},
          {title: 'Upcoming Accepted Jobs', data: requests},
        ]}
        renderItem={({item}) => <RequestItem item={item} />}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={getItemSeparator}
        //TODO: implement ListHeaderComponent
        // ListHeaderComponent={this.getListHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

function mapStateToProps(state, ownProps) {
  return {
    requests: state.requests,
  };
}

const mapDispatchToProps = {
  loadRequests,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpcomingRequestsScreen);
