import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Импортируем компонент Provider
import { Provider } from "react-redux";
// Импортируем переменную store
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
   * Оборачиваем приложение в компонент Provider.
   * В качестве параметра компонент получает store.
   */
  <Provider store={store}>
    <App />
  </Provider>
);
