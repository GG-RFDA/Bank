// Импортируем функцию combineReducers для дальнейшего объединения редюсеров и их передачи в store
import {configureStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";
// Импортируем 2 редюсера
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
// Импортируем функцию composeWithDevTools
import { composeWithDevTools } from 'redux-devtools-extension';
// Импортируем thunk для работы с асинхронными запросами
import thunk from "redux-thunk";
// Создаём новый объект rootReducer и вызываем функцию combineReducers, которая принимает параметром объект
const rootReducer = combineReducers({
    // Передаём два редюсера в качестве параметров "ключ-значение"
    cash: cashReducer,
    customers: customerReducer,
})
/*
 * Создаём переменную store.
 * store - это объект, который содержит несколько методов.
 * Экспортируем переменную store, чтобы передать переменную в компонент Provider и связать состояние redux с React.
 */
export const store = configureStore({
    // Передаём rootReducer параметром в store.
    reducer: rootReducer,
    /*
     * Передаём функцию composeWithDevTools вторым параметром в store.
     * Далее устанавливаем расширение в браузере "Redux DevTools".
     * Затем нажимаем клавишу F12 и переходим во вкладку Redux.
     * В этой вкладке можно посмотреть текущее состояние, находящиеся внутри каждого редюсера поля и внесенные изменения при помощи action.
     * Используем функцию applyMiddleware, где указываем thunk.
     */
    enhancer: composeWithDevTools(applyMiddleware(thunk))
})