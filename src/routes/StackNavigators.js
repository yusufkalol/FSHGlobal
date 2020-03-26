import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingRequests from '../screens/UpcomingRequests';
import CompletedRequests from '../screens/CompletedRequests';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, ImageBackground} from 'react-native';
import {Button} from 'react-native-paper';

const RequestTopTab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const AccountStack = createStackNavigator();

export const RequestStackScreen = () => {
  return (
    <RequestTopTab.Navigator>
      <RequestTopTab.Screen
        name="Upcoming"
        component={UpcomingRequests}
        tabBarLabel="Customer Requests"
      />
      <RequestTopTab.Screen name="Completed" component={CompletedRequests} />
    </RequestTopTab.Navigator>
  );
};

function MyHeader({title, style}) {
  return (
    <View style={style}>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        }}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>{title}</Text>
      </ImageBackground>
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Text>Details Screen in Home</Text>
    </View>
  );
}
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            height: 110,
          },
          title: 'Hi, Mustafa',
          header: ({scene, previous, navigation}) => {
            const {options} = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;

            return <MyHeader title={title} style={options.headerStyle} />;
          },
        }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};
function AccountScreen({navigation}) {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Text>Accounts!</Text>
      <Button onPress={() => navigation.navigate('AccountsSettings')}>
        Accounts Settings ......
      </Button>
    </View>
  );
}
function AccountsSettings({navigation}) {
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Text>Accounts Settings Screen</Text>
    </View>
  );
}

export const AccountStackScreen = ({props}) => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Accounts" component={AccountScreen} />
      <AccountStack.Screen
        name="AccountsSettings"
        component={AccountsSettings}
      />
    </AccountStack.Navigator>
  );
};
