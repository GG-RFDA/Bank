import {configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})
/*
 * Создаём переменную store.
 * store - это объект, который содержит несколько методов.
 */
export const store = configureStore({
    reducer: rootReducer,
    enhancer: composeWithDevTools(applyMiddleware(thunk))
})