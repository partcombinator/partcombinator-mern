   
import { userTypes } from '../_types';
import { loginApi } from '../api/user';
import { setToken, getToken, removeToken } from '../api/token';

export function loginUser(formData){
    return async (dispatch) => {
        dispatch( _request() );
        try {
            removeToken();
            const response = await loginApi(formData)
            if (response.token) {
                setToken(response.token)
                dispatch( _success(response.token) );
            } else {
                throw new Error(response.msg);
            }
            
        } catch (error) {
            removeToken();
            dispatch( _error(error) );

        }
    }

    
}

const _request = () => ({
    type: userTypes.USERS_LOGIN_REQUEST,
    payload: true
})

const _success = token => ({
    type: userTypes.USERS_LOGIN_SUCCESS,
    payload: token 
})

const _error = error => ({
    type: userTypes.USERS_LOGIN_ERROR,
    payload: error 
})


export function logoutUser(){
    removeToken();
}

