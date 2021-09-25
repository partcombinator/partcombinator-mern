   
import { userConstants } from '../_constants';
import { history } from '../_helpers';
import { login } from '../api/useer'

export const userActions = {
    login
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}