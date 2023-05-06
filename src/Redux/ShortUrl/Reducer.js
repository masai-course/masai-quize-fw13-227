import {  GET_QUIZ } from "./ActionType"

const initialState = {
 quiz:null
}

export const quizReducer = (store=initialState, { type, payload }) => {
 if (type === GET_QUIZ) {
  return {...store, quiz:payload}
 }
 
 
 else return store
}