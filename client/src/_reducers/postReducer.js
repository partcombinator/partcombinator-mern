import { postTypes } from '../_types';


const initialState = {
    posts: [],
    error: null,
    loading: false,
    postdelete: null,
    postedit: null
}

export default function post(state = initialState, action) {
    switch(action.type) {
        case postTypes.BEGIN_DOWNLOAD_POST:
        case postTypes.ADD_POST: 
            return {
                ...state,
                loading: action.payload
            }

        case postTypes.ADD_POST_SUCCESS: 
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload]
            } 
        
        case postTypes.DOWNLOAD_POST_ERROR: 
        case postTypes.ADD_POST_ERROR:
        case postTypes.POST_DELETED_ERROR:
        case postTypes.POST_EDIT_ERROR:    
            return {
                ...state,
                loading: false,
                error: action.payload
            }

         case postTypes.DOWNLOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                posts: action.payload
            }

         case postTypes.GIVE_POST_DELETE:
             return {
                 ...state,
                 postdelete: action.payload
             }
         
        case postTypes.POST_DELETED_SUCCESS:{
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== state.postdelete),
                postdelete: null
            }
        }

        case postTypes.GIVE_POST_EDIT:
            return {
                ...state,
                postedit : action.payload
            }
        case postTypes.POST_EDIT_SUCCESS:
            return {
                ...state,
                postedit: null,
                posts: state.posts.map( post => 
                        post.id === action.payload.id ? post = action.payload : post
                    )
            } 
            
        default:
            return state;
    }
}