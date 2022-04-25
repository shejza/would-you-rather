import {
    RECEIVE_QUESTIONS,
    RETURN_ANSWER,
    RETURN_QUESTION
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
        
        case RETURN_QUESTION:
            return {
               question: action.question
              };
      default:
        return state;
    }
  }
  