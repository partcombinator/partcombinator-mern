import { postConstants } from '../_constants';


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
    type: postConstants.ADD_POST,
    payload: true
})

const _addPostSuccess = post => ({
    type: postConstants.ADD_POST_SUCCESS,
    payload: post 
})

const _addPostError = stateError => ({
    type: postConstants.ADD_POST_ERROR,
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
    type: postConstants.BEGIN_DOWNLOAD_POST,
    payload: true
})

const _getAllPostSuccess = posts => (
    {
    type: postConstants.DOWNLOAD_POST_SUCCESS,
    payload: posts
})

const _getPostError = () => ({
    type: postConstants.DOWNLOAD_POST_ERROR,
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
    type: postConstants.GIVE_POST_DELETE,
    payload: id
})

const _deletePostSuccess = () => ({
    type: postConstants.POST_DELETED_SUCCESS,
})

const _deletePostError = () => ({
    type: postConstants.POST_DELETED_ERROR,
    payload: true
})


// EDIT 

export function getPostEdit(post) {
    return (dispatch) => {
        dispatch( _getPostEditAction(post) )
    }
}

const _getPostEditAction = post => ({
    type: postConstants.GIVE_POST_EDIT,
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
    type: postConstants.BEGIN_EDIT_POST
})

const _editPostSuccess = post => ({
    type: postConstants.POST_EDIT_SUCCESS,
    payload: post
})

const _editPostError = () => ({
    type: postConstants.POST_EDIT_ERROR,
    payload: true
})



