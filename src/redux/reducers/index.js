import { combineReducers } from "redux";
import SignupReducer from'./SignupReducer';
import LoginReducer from './LoginReducer';

const allReducers = combineReducers({
    signup:SignupReducer,
    login:LoginReducer,
});

export default allReducers;
