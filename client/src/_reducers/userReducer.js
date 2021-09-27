import { userTypes } from '../_types';
import { getToken } from "../api/token";

let token = null 
try {
  token = getToken();
} catch (error) {
  console.log(error)
}

const initialState = {
  token: token ? token : null,
  error: null,
  loggedIn : null,
  loading: false,
  user: null
}


export function users(state = initialState, action) {
    switch (action.type) {
      case userTypes.USERS_LOGIN_REQUEST:
      case userTypes.USERS_REGISTER_REQUEST: 
            return {
                ...state,
                loading: true,
                token: null,
                error: null,
            }

      case userTypes.USERS_LOGIN_SUCCESS:
      case userTypes.USERS_REGISTER_SUCCESS:  
        return {
          ...state,
          loading: false,
          token: action.payload
        } 
      
      case userTypes.USERS_LOGIN_ERROR:
      case userTypes.USERS_REGISTER_ERROR:
        return{
          ...state,
          loading: false,
          token: null,
          error: "Error"
        }

      case userTypes.USERS_LOGOUT:
          return{  
          }

      case userTypes.USER_DATA:
            return{
              ...state,
              user:  action.payload
            }    


      default:
        return state
    }
  }