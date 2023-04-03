import { addManyCustomerAction } from "../store/customerReducer"
/*
 * Создаём новую стрелочную фнукцию и экспортируем её.
 * Из этой функции возвращаем новую функцию, которая принимает параметром dispatch.
 */
export const fetchCustomers = () => {
    return function(dispatch) {
        // Создаём запрос
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            /*
             * После того, как данные от сервера были получены, вызываем dispatch, который прокинут через параметры.
             * В самом dispatch прокидываем функцию addManyCustomerAction.
             * В addManyCustomerAction передаём json.
             * json - это массив пользователей, который пришёл от сервера.
             */
            .then(json => dispatch(addManyCustomerAction(json)))
    }
}