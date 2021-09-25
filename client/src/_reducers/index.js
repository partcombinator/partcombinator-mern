import {  combineReducers } from "redux";
import postReducer from "./postReducer";
import { users } from './userReducer';

export default combineReducers({
        posts: postReducer,
        users,
});