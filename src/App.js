import React, {Component} from 'react';
import Routes from './routes/Routes';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import configureStore from './redux/configureStore';

const store = configureStore();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#818FFF', // blue
    // accent: '#E8A590', // pink
    /* from react-native-login-template */
    primary: '#600EE6',
    accent: '#414757',
    error: '#f13a59',
  },
};

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <Routes />
        </PaperProvider>
      </ReduxProvider>
    );
  }
}

export default App;
