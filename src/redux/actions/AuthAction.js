import * as types from './actionTypes';
import {verifyUser} from '../../api/requestApi';

export function restoreTokenAction() {
  return function(dispatch) {
    // dispatch({type: types.RESTORE_TOKEN, userToken: 'dummy-auth'});
    const bootstrapAsync = () => {
      // let userToken = null;
      let userToken = null;
      // try {
      //   // userToken = await AsyncStorage.getItem('userToken');
      // } catch (e) {
      //   // Restoring token failed
      //   alert(e);
      // }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: types.RESTORE_TOKEN, userToken});
    };
    bootstrapAsync();
  };
}

export function signInAction(mobileNo, password) {
  return function(dispatch) {
    const bootstrapAsync = () => {
      //Api Call
      verifyUser(mobileNo, password).then(function(data) {
        console.log(data.username);
      });

      let userToken = 'dummy-auth-token';
      // try {
      //   // userToken = await AsyncStorage.getItem('userToken');
      // } catch (e) {
      //   // Restoring token failed
      //   alert(e);
      // }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'SIGN_IN', userToken: userToken});
    };
    bootstrapAsync();
    // dispatch({type: 'SIGN_IN', userToken: 'dummy-auth-token'});
  };
}
