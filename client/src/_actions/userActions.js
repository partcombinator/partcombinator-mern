   
import { userTypes } from '../_types';
import { loginApi, registerApi, getData} from '../api/user';
import { setToken, getToken, removeToken } from '../api/token';


// Login
export function loginUser(formData){
    return async (dispatch) => {
        dispatch( _login_request() );
        try {
            removeToken();
            const response = await loginApi(formData)
            if (response.token) {
                setToken(response.token)
                dispatch( _login_success(response.token) );
            } else {
                throw new Error(response.msg);
            }
            
        } catch (error) {
            removeToken();
            dispatch( _login_error(error) );

        }
    }
}

const _login_request = () => ({
    type: userTypes.USERS_LOGIN_REQUEST,
    payload: true
})

const _login_success = token => ({
    type: userTypes.USERS_LOGIN_SUCCESS,
    payload: token 
})

const _login_error = error => ({
    type: userTypes.USERS_LOGIN_ERROR,
    payload: error 
})



// Logout
export function logoutUser(){
    removeToken();
    return { type: userTypes.USERS_LOGOUT };
}


// Register
export function registerUser(formData){
    return async (dispatch) => {
        dispatch( _register_request() );
        try {
            removeToken();
            const response = await registerApi(formData)
            if (response.token) {
                setToken(response.token)
                dispatch( _register_success(response.token) );
            } else {
                throw new Error(response.msg);
            }
            
        } catch (error) {
            removeToken();
            dispatch( _register_error(error) );

        }
    }
}

const _register_request = () => ({
    type: userTypes.USERS_REGISTER_REQUEST,
    payload: true
})

const _register_success = token => ({
    type: userTypes.USERS_REGISTER_SUCCESS,
    payload: token 
})

const _register_error = error => ({
    type: userTypes.USERS_REGISTER_ERROR,
    payload: error 
})

// User Data
export function UserData(id){
    return async (dispatch) => {
            const data = await getData(id)
            dispatch( _user_data(data) );
        }
}

const _user_data = (data) => ({
    type: userTypes.USER_DATA,
    payload: data  
})








