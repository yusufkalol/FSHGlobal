import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.userToken,
        isLoading: false,
      };
    case 'SIGN_IN':
      console.log('userToken in SIGNIN: ', action.userToken);
      return {
        ...state,
        userToken: action.userToken,
        isSignout: false,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        userToken: null,
        isSignout: true,
      };
    default:
      return state;
  }
}
