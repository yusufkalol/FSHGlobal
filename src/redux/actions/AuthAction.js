import * as types from './actionTypes';

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

export function signInAction(data) {
  return function(dispatch) {
    const bootstrapAsync = () => {
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
