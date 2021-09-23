import { 
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_ERROR
 } from '../_types/postTypes';

 // Create new Post object
export function createNewPostAction(post){
    return (dispatch) => {
        dispatch( addPost() );
        try {
            dispatch( addPostSuccess(post) );
        } catch (error) {
            dispatch( addPostError(true) );
        }
    }
}

const addPost = () => ({
    type: ADD_POST,
    payload: true
})

const addPostSuccess = post => ({
    type: ADD_POST_SUCCESS,
    payload: post 
})

const addPostError = stateError => ({
    type: ADD_POST_ERROR,
    payload: stateError
})
