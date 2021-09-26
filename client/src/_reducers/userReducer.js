import { userTypes } from '../_types';
import { getToken } from "../api/token";

let token = getToken();

const initialState = {
  token: token ? token : null,
  error: null,
  loggedIn : null,
  loading: false,
}

export function users(state = initialState, action) {
    switch (action.type) {
      case userTypes.USERS_LOGIN_REQUEST: 
            return {
                ...state,
                loading: true,
                token: null,
                error: null,
            }

      case userTypes.USERS_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: action.payload
        } 
      
      case userTypes.USERS_LOGIN_ERROR:
        return{
          ...state,
          loading: false,
          token: null,
          error: "Error at login user"
        }
      
      default:
        return state
    }
  }