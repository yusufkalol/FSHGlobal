import {combineReducers} from 'redux';
import homeGrid from './homeGridReducer';
const rootReducer = combineReducers({
  homeGrid,
});

export default rootReducer;
