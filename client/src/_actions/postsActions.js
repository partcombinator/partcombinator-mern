import { 
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_ERROR,

    BEGIN_DOWNLOAD_POST,
    DOWNLOAD_POST_SUCCESS,
    DOWNLOAD_POST_ERROR
 } from '../_types/postTypes';
 import { createPost } from '../api/post'

 // Create new Post object
export function createNewPostAction(post){
    return (dispatch) => {
        dispatch( addPost(post) );
        try {
            createPost(post)
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


// function download products from
export function givePostAction() {
    return async (dispatch) => {
        dispatch( downloadPost()  );
    }
}

const downloadPost = () => ({
    type: BEGIN_DOWNLOAD_POST,
    payload: true
})