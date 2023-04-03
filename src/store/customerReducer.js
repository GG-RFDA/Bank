/*
 * Создаём состояние по умолчанию.
 * Это будет объект.
 * В данном случае работаем с массивом.
 */
const defaultState = {
    customers: []
}

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
         */
      case ADD_MANY_CUSTOMERS:
           return {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOMER:
          return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMERS: 
          return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
        return state
    }
  }
  
  export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
  export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
  export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})