import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button} from 'react-native';
import {restoreTokenAction, signInAction} from '../redux/actions/AuthAction';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes/Routes';
import SignInScreen from '../components/SignInScreen';

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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : auth.userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign in',
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: auth.isSignout ? 'pop' : 'push',
            }}
          />
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
