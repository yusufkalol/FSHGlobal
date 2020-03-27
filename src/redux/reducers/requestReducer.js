import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function requestReducer(state = initialState.requests, action) {
  switch (action.type) {
    case types.LOAD_REQUESTS:
      return action.newRequests;
    default:
      return state;
  }
}
