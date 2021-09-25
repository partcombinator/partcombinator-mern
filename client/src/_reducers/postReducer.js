import { postConstants } from '../_constants';


const initialState = {
    posts: [],
    error: null,
    loading: false,
    postdelete: null,
    postedit: null
}

export default function post(state = initialState, action) {
    switch(action.type) {
        case postConstants.BEGIN_DOWNLOAD_POST:
        case postConstants.ADD_POST: 
            return {
                ...state,
                loading: action.payload
            }

        case postConstants.ADD_POST_SUCCESS: 
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload]
            } 
        
        case postConstants.DOWNLOAD_POST_ERROR: 
        case postConstants.ADD_POST_ERROR:
        case postConstants.POST_DELETED_ERROR:
        case postConstants.POST_EDIT_ERROR:    
            return {
                ...state,
                loading: false,
                error: action.payload
            }

         case postConstants.DOWNLOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                posts: action.payload
            }

         case postConstants.GIVE_POST_DELETE:
             return {
                 ...state,
                 postdelete: action.payload
             }
         
        case postConstants.POST_DELETED_SUCCESS:{
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== state.postdelete),
                postdelete: null
            }
        }

        case postConstants.GIVE_POST_EDIT:
            return {
                ...state,
                postedit : action.payload
            }
        case postConstants.POST_EDIT_SUCCESS:
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