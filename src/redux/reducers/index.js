import { combineReducers } from "redux";
import SignupReducer from'./SignupReducer';
import LoginReducer from './LoginReducer';
import userReducer from './userReducer';
import displayBlogReducer from './displayBlogReducer';
import addblogReducer from './addblogReducer';

const allReducers = combineReducers({
    signup:SignupReducer,
    login:LoginReducer,
    user:userReducer,
    displayblog:displayBlogReducer,
    addblog:addblogReducer,
});

export default allReducers;
