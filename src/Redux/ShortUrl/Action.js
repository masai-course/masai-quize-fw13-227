import { GET_QUIZ } from "./ActionType";

// https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple
// let url=`https://quize-game-zarmariya.herokuapp.com/quizs?category=${data.category}&difficulty=${data.difficulty}`

export const getQuiz = (data) => async (dispatch) => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.difficulty}&type=multiple`
  );
  const quiz = await res.json();
  console.log("quiz action", quiz.results);
  dispatch({ type: GET_QUIZ, payload: quiz.results });
};
