import { 
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_ERROR,

    BEGIN_DOWNLOAD_POST,
    DOWNLOAD_POST_SUCCESS,
    DOWNLOAD_POST_ERROR,

    GIVE_POST_DELETE,
    POST_DELETED_SUCCESS,
    POST_DELETED_ERROR,

    GIVE_POST_EDIT,
    BEGIN_EDIT_POST,
    POST_EDIT_SUCCESS,
    POST_EDIT_ERROR
 } from '../_types/postTypes';
 import { createPost, getAllPost, deletePost, editPost } from '../api/post'

 // Create new Post object
export function createNewPostAction(post){
    return (dispatch) => {
        dispatch( _addPost(post) );
        try {
            createPost(post)
            dispatch( _addPostSuccess(post) );
        } catch (error) {
            dispatch( _addPostError(true) );
        }
    }
}

const _addPost = () => ({
    type: ADD_POST,
    payload: true
})

const _addPostSuccess = post => ({
    type: ADD_POST_SUCCESS,
    payload: post 
})

const _addPostError = stateError => ({
    type: ADD_POST_ERROR,
    payload: stateError
})


// function download products from
export function givePostAction() {
    return async (dispatch) => {
        dispatch( _downloadPost()  );

        try {
            const response = await getAllPost();
            const posts = response.posts;
            dispatch( _getAllPostSuccess( posts ));
        } catch (error) {
            dispatch( _getPostError() )
        }   
    }
}

const _downloadPost = () => ({
    type: BEGIN_DOWNLOAD_POST,
    payload: true
})

const _getAllPostSuccess = posts => (
    {
    type: DOWNLOAD_POST_SUCCESS,
    payload: posts
})

const _getPostError = () => ({
    type: DOWNLOAD_POST_ERROR,
    payload: true
})


// DELETE
export function detelePOstAction(id) {
    return async (dispatch) => {
        dispatch(_givePostDelete());
        try {
           await deletePost(id)
           dispatch( _deletePostSuccess());
        } catch (error) {
            dispatch(  _deletePostError() );
        }

    }
}

const _givePostDelete = id => ({
    type: GIVE_POST_DELETE,
    payload: id
})

const _deletePostSuccess = () => ({
    type: POST_DELETED_SUCCESS,
})

const _deletePostError = () => ({
    type: POST_DELETED_ERROR,
    payload: true
})


// EDIT 

export function getPostEdit(post) {
    return (dispatch) => {
        dispatch( _getPostEditAction(post) )
    }
}

const _getPostEditAction = post => ({
    type: GIVE_POST_EDIT,
    payload: post
})

export function editPostAction( post ) {
    console.log("editPostAction:", post)
    console.log("id:", post.id)
    return async (dispatch) => {
        dispatch( _editPost( post)  )
        try {
            await editPost( post.id, post)
            dispatch( _editPostSuccess(post) )    
        } catch (error) {
            dispatch( _editPostError() ) 
        }
    }
}

const _editPost = () => ({
    type: BEGIN_EDIT_POST
})

const _editPostSuccess = post => ({
    type: POST_EDIT_SUCCESS,
    payload: post
})

const _editPostError = () => ({
    type: POST_EDIT_ERROR,
    payload: true
})



