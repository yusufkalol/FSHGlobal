import {combineReducers} from 'redux';
import homeGrid from './homeGridReducer';
import requests from './requestReducer';
const rootReducer = combineReducers({
  homeGrid,
  requests,
});

export default rootReducer;
