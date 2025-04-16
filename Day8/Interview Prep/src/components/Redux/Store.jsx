import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import useReducerx from "./Reducer";

const rootReducer = combineReducers({ user: useReducerx });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
