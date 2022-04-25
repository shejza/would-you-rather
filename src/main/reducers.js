import { combineReducers } from 'redux';
import {  auth_user } from './scenes/auth/services/reducers';
import  { questions } from "../main/scenes/reducers/questions"; 
import { users } from "../main/scenes/reducers/users";  
const rootReducer = combineReducers({
    users,
    auth_user,
    questions
});

export default rootReducer;
