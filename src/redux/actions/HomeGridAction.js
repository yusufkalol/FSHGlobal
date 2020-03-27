import * as types from './actionTypes';
import {homeGrid} from '../../assets/Data';
export function loadHomeGrid() {
  return function(dispatch) {
    dispatch({type: types.LOAD_REQUESTS, homeGrid});
  };
}
