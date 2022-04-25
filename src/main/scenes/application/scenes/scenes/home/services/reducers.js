export function get_questions(state = { questions: {} }, action) {
    switch (action.type) {
      case 'QUESTIONS_GETALL':
        return {
          questions: action.questions,
        };
      case 'ERROR':
        return {
          error: action.error,
        };
      default:
        return state;
    }
  }
