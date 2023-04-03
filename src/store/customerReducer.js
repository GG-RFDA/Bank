/*
 * Создаём состояние по умолчанию.
 * Это будет объект.
 * В данном случае работаем с массивом.
 */
const defaultState = {
    customers: []
}
// Выносим названия actions в отдельные константы
const ADD_CUSTOMER = "ADD_CUSTOMER"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS"
/*
 * Создаём второй reducer.
 * Экспортируем его.
 */
export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        /* 
         * Меняем названия типа action.
         * Создаём actions для добавления одного или нескольких покупателей в список, а также для удаления покупателей.
         * В кейсах используем ранее созданные константы.
         */
      case ADD_MANY_CUSTOMERS:
        /*
         * Возвращаем новый объект, в который разворачиваем старое состояние.
         * Поскольку это операция добавление нового клиента, то присваиваем customers новый массив.
         * В новый массив разворачиваем уже существующий массив customers.
         * В конец добавляем объект, который будем передавать через action.
         */
           return {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOMER:
          return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMERS: 
        /*
         * Проделываем почти ту же последовательность действий, что и в случае с ADD_CUSTOMER.
         * Разница между кейсами будет заключаться в том, что здесь мы фильтруем массив customers.
         * Используем функцию filter, которая возвращает новый массив.
         * В новый массив попадают только те объекты, для которых функция-колбэк вернула true.
         * Если id клиента равняется тому id, который будем передавать как payload, то элемент не попадёт в новый массив.
         */
          return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
        return state
    }
  }
  /*
   * Создаём простейшие функции, которые будут возвращать объекты.
   * Параметром функция будет принимать какие-то данные.
   * Функция вернёт объект с типом action и какими-то данными, которые передадим в параметры.
   */
  export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
  export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
  export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})