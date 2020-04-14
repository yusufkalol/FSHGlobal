import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const Dashboard = ({navigation}) => (
  <Background>
    <Logo />
    <Header>FSH Global</Header>

    <Paragraph>
      Easiest way to manage sales services and agent tracking
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('Login')}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
      Sign Up
    </Button>
  </Background>
);

export default Dashboard;
