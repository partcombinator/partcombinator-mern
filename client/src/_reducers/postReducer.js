import { 
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_ERROR
 } from '../_types/postTypes';


const initialState = {
    posts: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
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
        
        case ADD_POST_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload
            } 

        default:
            return state;
    }
}