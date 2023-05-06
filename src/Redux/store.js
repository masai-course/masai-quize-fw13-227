import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { quizReducer } from "./ShortUrl/Reducer";





const rootReducers = combineReducers({
quiz:quizReducer
 
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
