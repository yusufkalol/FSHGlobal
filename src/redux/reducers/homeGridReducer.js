import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function homeGridReducer(state = initialState.homeGrid, action) {
  switch (action.type) {
    case types.LOAD_HOMEGRID:
      return action.homeGrid;
    default:
      return state;
  }
}
