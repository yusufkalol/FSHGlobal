import {combineReducers} from 'redux';
import homeGrid from './homeGridReducer';
import requests from './requestReducer';
import auth from './AuthReducer';
const rootReducer = combineReducers({
  homeGrid,
  requests,
  auth,
});

export default rootReducer;
