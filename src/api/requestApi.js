const BASE_URL = 'http://service007.in/dms/appservices.asmx/';
import {handleResponse, handleError} from './apiUtils';

export function getRequests() {
  // return fetch(BASE_URL + 'newRequest')
  return fetch('https://api.myjson.com/bins/kqtbs')
    .then(handleResponse)
    .catch(handleError);
}

export function verifyUser(mobileNo, password) {
  // return fetch(BASE_URL + 'newRequest')
  return fetch(BASE_URL + `Login?username=${mobileNo}&password=${password}`)
    .then(handleResponse)
    .catch(handleError);
}
