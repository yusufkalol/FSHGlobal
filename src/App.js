import React, {Component} from 'react';
import Routes from './routes/Routes';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <Routes />
      </ReduxProvider>
    );
  }
}

export default App;
