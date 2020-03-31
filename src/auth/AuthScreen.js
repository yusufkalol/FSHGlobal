import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';
import {restoreTokenAction, signInAction} from '../redux/actions/AuthAction';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes/Routes';
import Dashboard from '../screens/Dashboard';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

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
    }, 500);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Dashboard">
        {auth.isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : auth.userToken == null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: auth.isSignout ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: auth.isSignout ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: auth.isSignout ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ForgotPasswordScreen}
              options={{
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: auth.isSignout ? 'pop' : 'push',
              }}
            />
          </>
        ) : (
          // User is signed in
          <Stack.Screen name="Routes" component={Routes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
