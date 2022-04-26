import {
    RECEIVE_QUESTIONS,
    RETURN_ANSWER,
    ADD_QUESTION
  } from "../actions/questions";
  
  export function questions(state = {}, action) {
    switch (action.type) {
      case RECEIVE_QUESTIONS:
        return {
            questions: action.questions,
        };
      case RETURN_ANSWER:
        return {
        
        };
        
        case ADD_QUESTION:
          const { question } = action;

          return {
            ...state,
            [question.id]: question
          };
      default:
        return state;
    }
  }
  