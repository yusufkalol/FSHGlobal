import React, {Component} from 'react';
import Routes from './routes/Routes';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import configureStore from './redux/configureStore';

const store = configureStore();

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#F67280',
//     accent: '#f1c40f',
//   },
// };

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </ReduxProvider>
    );
  }
}

export default App;
