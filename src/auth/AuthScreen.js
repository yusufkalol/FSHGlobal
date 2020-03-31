import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';
import {restoreTokenAction, signInAction} from '../redux/actions/AuthAction';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes/Routes';
// import SignInScreen from '../components/SignInScreen';
import LoginScreen from '../screens/LoginScreen';

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function HomeScreen() {
  // const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={() => {}} />
    </View>
  );
}

const Stack = createStackNavigator();

const AuthScreen = ({auth, restoreTokenAction}) => {
  // const [state, setState] = React.useState({});
  useEffect(() => {
    setTimeout(() => {
      restoreTokenAction();
    }, 2000);
  }, []);
  return auth.isLoading ? (
    // We haven't finished checking for the token yet
    <SplashScreen />
  ) : auth.userToken == null ? (
    <LoginScreen />
  ) : (
    // User is signed in
    <Routes />
  );
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
  };
}

const mapDispatchToProps = {
  restoreTokenAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
