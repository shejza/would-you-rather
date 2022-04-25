import { RECEIVE_USERS } from './../actions/users';
import { RETURN_QUESTION, RETURN_ANSWER } from './../actions/questions';

export function users(state = {}, action) {
 switch (action.type) {
   case RECEIVE_USERS:
     return {
       users: action.users,
     };
     case RETURN_ANSWER:
        return {
       
        };
        case RETURN_QUESTION:
            const { id, author } = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
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