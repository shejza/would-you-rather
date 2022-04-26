import { RECEIVE_USERS, ADD_QUESTION_TO_USER } from './../actions/users';
import { RETURN_ANSWER } from './../actions/questions';

export function users(state = {}, action) {
 
 switch (action.type) {
   case RECEIVE_USERS:
     return {
       users: action.users,
     };
     case RETURN_ANSWER:
        return {
       
        };
        case ADD_QUESTION_TO_USER:
        const { id, author } = action;
        return {
            ...state,
            [author]: {
                ...state[author],
                questions: state.users[author].questions.concat(id)
            }
        };  
   case 'ERROR':
     return {
       error: action.error,
     };
   default:
     return state;
 }
}