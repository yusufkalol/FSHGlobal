import React from 'react';
import {connect} from 'react-redux';
import {View, TextInput, Button} from 'react-native';
import {signInAction} from '../redux/actions/AuthAction';

function SignInScreen({auth, signInAction}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={signInAction} />
    </View>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
  };
}

const mapDispatchToProps = {
  signInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
