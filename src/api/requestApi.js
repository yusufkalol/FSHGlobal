const BASE_URL = 'http://192.168.43.66:3001/';
import {handleResponse, handleError} from './apiUtils';

export function getRequests() {
  // return fetch(BASE_URL + 'newRequest')
  return fetch('https://api.myjson.com/bins/kqtbs')
    .then(handleResponse)
    .catch(handleError);
}
