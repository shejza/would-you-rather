import {_getQuestions} from "../../../../../../../helpers/data";
import { _saveQuestionAnswer } from './../../../../../../../helpers/data';

export const actions = {
  getAllQuestions,
  handleSaveQuestionAnswer
};

function getAllQuestions() {
  return (dispatch) => {
    _getQuestions().then((questions) =>{
      dispatch(success(questions));
    }
    )
  };

  function success(questions) {
    return {
      type: 'QUESTIONS_GETALL',
      questions,
    };
  }

  function failure(error) {
    return {
      type: 'Error',
      error,
    };
  }
}

  function handleSaveQuestionAnswer(authUser, qid, answer) {
    return dispatch => {
      dispatch(addAnswerToUser(authUser, qid, answer));
      dispatch(addAnswerToQuestion(authUser, qid, answer));

      return _saveQuestionAnswer(authUser, qid, answer).catch(e => {
        console.warn('Error in handleSaveQuestionAnswer:', e);
      });
    };

    function addAnswerToUser(authUser, qid, answer) {
        return {
          type: 'ADD_ANSWER_TO_USER',
          authUser,
          qid,
          answer
        };
      }

     function addAnswerToQuestion(authUser, qid, answer) {
        return {
          type: 'ADD_ANSWER_TO_QUESTION',
          authUser,
          qid,
          answer
        };
      }
  }

  
