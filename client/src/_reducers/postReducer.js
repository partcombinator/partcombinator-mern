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

    GIVE_POST_EDIT

 } from '../_types/postTypes';


const initialState = {
    posts: [],
    error: null,
    loading: false,
    postdelete: null,
    postedit: null
}

export default function post(state = initialState, action) {
    switch(action.type) {
        case BEGIN_DOWNLOAD_POST:
        case ADD_POST: 
            return {
                ...state,
                loading: action.payload
            }

        case ADD_POST_SUCCESS: 
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload]
            } 
        
        case DOWNLOAD_POST_ERROR: 
        case ADD_POST_ERROR:
        case POST_DELETED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

         case DOWNLOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                posts: action.payload
            }

         case GIVE_POST_DELETE:
             return {
                 ...state,
                 postdelete: action.payload
             }
         
        case POST_DELETED_SUCCESS:{
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== state.postdelete),
                postdelete: null
            }
        }

        case GIVE_POST_EDIT:
            return {
                ...state,
                postedit : action.payload
            }

          
            
        default:
            return state;
    }
}