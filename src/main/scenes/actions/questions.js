import { saveQuestionAnswer, saveQuestion } from '../../../helpers/api';
import { addQuestionToUser } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RETURN_ANSWER = 'RETURN_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function returnAnswer(authedUser, qid, answer) {
  return {
    type: RETURN_ANSWER,
    authedUser,
    qid,
    answer
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleReturnAnswer(qid, answer) {
  return (dispatch, getState) => {
    const authedUser = localStorage.getItem('authId');
    dispatch(returnAnswer(authedUser, qid, answer));
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    });
  };
}

//export function handleReturnQuestion(formValues) {
//  return (dispatch) => {
//    const authedUser = localStorage.getItem('authId');
//    return saveQuestion({
//      formValues,
//      author: authedUser
//    }).then(question => 
//      {
//        dispatch(addQuestion(question))
//        dispatch(addQuestionToUser(question));
//      }
//    );
//  };
//}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}

