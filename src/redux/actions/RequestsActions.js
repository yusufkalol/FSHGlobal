import * as types from './actionTypes';
import * as requestApi from '../../api/requestApi';

export function loadRequests() {
  return function(dispatch) {
    return requestApi
      .getRequests()
      .then(newRequests => {
        dispatch({type: types.LOAD_REQUESTS, newRequests});
      })
      .catch(error => {
        throw error;
      });
  };
}
