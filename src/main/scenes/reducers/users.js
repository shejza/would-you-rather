import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER } from './../actions/users';

export function users(state = {}, action) {
 
 switch (action.type) {
   case RECEIVE_USERS:
     return {
       users: action.users,
     };
     case ADD_ANSWER_TO_USER:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer
          }
        }
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