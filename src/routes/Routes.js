import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  RequestStackScreen,
  HomeStackScreen,
  AccountStackScreen,
} from './StackNavigators';

const Tab = createMaterialBottomTabNavigator();

class Routes extends Component {
  render() {
    return (
      // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        style={{backgroundColor: '#000000'}}>
        <Tab.Screen
          name="Request"
          component={RequestStackScreen}
          options={{
            tabBarLabel: 'Request',
            tabBarIcon: ({color}) => (
              <Icon name="assignment" color={'#FFF'} size={26} />
            ),
            tabBarColor: 'green',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={AccountStackScreen}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({color}) => (
              <Icon name="notifications" color={'#FFF'} size={26} />
            ),
            tabBarColor: '#F67280',
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({color}) => (
              <Icon name="widgets" color={'#FFF'} size={26} />
            ),
            tabBarColor: '#3498db',
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountStackScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => (
              <Icon name="person" color={'#FFF'} size={26} />
            ),
            tabBarColor: '#6C5B7B',
          }}
        />
        <Tab.Screen
          name="Chats"
          component={AccountStackScreen}
          options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({color}) => (
              <Icon name="chat" color={'#FFF'} size={26} />
            ),
            tabBarColor: '#99B898',
          }}
        />
      </Tab.Navigator>
      // </NavigationContainer>
    );
  }
}

export default Routes;
