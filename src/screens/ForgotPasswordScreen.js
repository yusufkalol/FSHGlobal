import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {emailValidator} from '../core/utils';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import {theme} from '../core/theme';
import Button from '../components/Button';

const ForgotPasswordScreen = ({navigation}) => {
  const [mobileNo, setMbileNo] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const mobileNoError = emailValidator(mobileNo.value);

    if (mobileNoError) {
      setMbileNo({...mobileNo, error: mobileNoError});
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('Login')} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="Mobile Number"
        returnKeyType="done"
        value={mobileNo.value}
        onChangeText={text => setMbileNo({value: text, error: ''})}
        error={!!mobileNo.error}
        errorText={mobileNo.error}
        autoCapitalize="none"
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default ForgotPasswordScreen;
