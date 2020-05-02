import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signInAction} from '../redux/actions/AuthAction';

import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {mobileNoValidator, passwordValidator} from '../core/utils';

const LoginScreen = ({auth, signInAction, navigation}) => {
  const [mobileNo, setMobileNo] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onLoginPressed = () => {
    const mobileNoError = mobileNoValidator(mobileNo.value);
    const passwordError = passwordValidator(password.value);

    if (mobileNoError || passwordError) {
      setMobileNo({...mobileNo, error: mobileNoError});
      setPassword({...password, error: passwordError});
      return;
    }

    signInAction(mobileNo.value, password.value);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Dashboard')} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Mobile-Number"
        returnKeyType="next"
        value={mobileNo.value}
        onChangeText={text => setMobileNo({value: text, error: ''})}
        error={!!mobileNo.error}
        errorText={mobileNo.error}
        autoCapitalize="none"
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
  };
}

const mapDispatchToProps = {
  signInAction,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
