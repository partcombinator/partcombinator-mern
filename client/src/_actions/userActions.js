   
import { userTypes } from '../_types';
import { history } from '../_helpers';
import { loginApi } from '../api/user'

export function loginUser(formData){
    const token = ''
    console.log("formData::", formData)
    return (dispatch) => {
        // dispatch( _addPost(post) );
        try {
            token = loginApi(formData)
            console.log("token: ", token)
            // dispatch( _addPostSuccess(post) );
        } catch (error) {
            // dispatch( _addPostError(true) );
        }
    }
}


// export const userActions = {
//     login
// };

// function login(formData) {
//     return dispatch => {
//         dispatch(request({ username }));

//         login(formData)
//             .then(
//                 user => { 
//                     dispatch(success(user));
//                     history.push('/');
//                 },
//                 error => {
//                     dispatch(failure(error.toString()));
//                     dispatch(alertActions.error(error.toString()));
//                 }
//             );
//     };
//     function request(user) { return { type: userTypes.LOGIN_REQUEST, user } }
//     function success(user) { return { type: userTypes.LOGIN_SUCCESS, user } }
//     function failure(error) { return { type: userTypes.LOGIN_FAILURE, error } }
// }