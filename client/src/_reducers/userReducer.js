import { userConstants } from '../_constants';
import { getToken } from "../api/token";

let token = getToken();
console.log("token:", token)
const initialState = token ? { loggedIn: true, token } : {};


export function users(state = {}, action) {
    switch (action.type) {
      
      default:
        return state
    }
  }