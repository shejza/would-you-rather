import { receiveQuestions } from "./questions";
import { getInitialData } from "../../../helpers/api";
import { receiveUsers } from './users';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}
