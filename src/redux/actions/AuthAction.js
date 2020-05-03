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
  console.log('mobileno', mobileNo);

  return function(dispatch) {
    const bootstrapAsync = () => {
      //Api Call
      let userToken = null;
      verifyUser(mobileNo, password)
        .then(function(data) {
          if (data.status != 0) userToken = 'dummy-token';
        })
        .then(function() {
          console.log('l: ', userToken);
          dispatch({type: 'SIGN_IN', userToken: userToken});
        });

      // try {
      //   // userToken = await AsyncStorage.getItem('userToken');
      // } catch (e) {
      //   // Restoring token failed
      //   alert(e);
      // }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    };
    bootstrapAsync();
    // dispatch({type: 'SIGN_IN', userToken: 'dummy-auth-token'});
  };
}
