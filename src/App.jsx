import React from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
// Импортируем созданные функции для клиентов
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
    /*
     * Чтобы изменить состояние, нужно использовать dispatch.
     * Получить dispatch внутри компонента можно получить при помощи хука useDispatch.
     */
    const dispatch = useDispatch()
    /*
     * Чтобы получить состояние, необходимо воспользоваться хуком useSelector.
     * Хук принимает параметром функцию, а функция принимает параметром состояние.
     * Указываем состояние вместе с названием редюсера и получаем нужную переменную.
     */
    const cash = useSelector(state => state.cash.cash)
    // Проделаем те же самые действия для customers
    const customers = useSelector(state => state.customers.customers)
    // Передаём в функцию параметр cash, чтобы мы могли указывать ту сумму денег, которую захотим, а не фиксированное значение
    const addCash = (cash) => {
        /*
         * Вызываем dispatch, где в качестве параметра принимает action.
         * action - это объект, у которого обязательно должен быть тип.
         * Тип ранее был указан в reducer.
         * Второе свойство объекта - это какие-то данные. В данном случае это сумма, на которую хотим увеличить кол-во денег на счету.
         * Прокидываем параметр cash в payload.
         */
        dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        // Проделываем те же самые операции, что и в функции addCash
        dispatch({type:"GET_CASH", payload: cash})
    }
    // Создаём стрелочную функцию для добавления нового клиента, где параметром принимается имя клиента
    const addCustomer = (name) => {
        // Данные - это объект клиента
        const customer = {
            // Передаём имя параметром
            name,
            // Присваииваем id, который получаем из текущего времени
            id: Date.now(),
        }
        // Внутри функции dispatch вызываем функцию addCustomerAction, куда передаём данные
        dispatch(addCustomerAction(customer))
    }
    // Создаём стрелочную функцию, где в качестве параметра передаём клиента
    const removeCustomer = (customer) => {
        // Внутри функции dispatch вызываем функцию removeCustomerAction, где в качестве параметра передаём id клиента
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        /*
         * Создаём блок, в котором будет отображаться кол-во денег на счету.
         * Добавляем нужные кнопки.
         * Вешаем на кнопки слушатель событий onClick и вызываем необходимые функции.
         * Параметром передаём функцию prompt, которая позволяет открыть окно с полем ввода в браузере.
         * Поскольку функция возвращает строку, её необходимо с помощью Number преобразовать к числовому значению.
         * Далее создаём условие, в котором будем проверять пустоту массива customers.
         * Если массив не пустой, то будем его отрисовывать.
         * В обратном случае, если массив пустой, то выводим сообшение об отсутствии клиентов.
         * С помощью функции map итерируемся по массиву customers.
         * Для каждого customers создаём блок div, в котором разворачиваем объект клиента и указываем его имя.
         * Вешаем слушатель событий на каждого клиента, где при нажатии на клиента будет происходить его удаление из списка.
         */
        <div className={'app'}>
        <div style={{fontSize:"3rem"}}>{cash}</div>
            <div style={{display:"flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                         <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem", border:'1px solid black', padding: "10px", marginTop: 5}}>
                             {customer.name}
                         </div>
                    )}
                </div>
                :
                <div style={{fontSize:"2rem", marginTop:20}}>
                    Клиенты отсутствуют!
                </div>
            }
        </div>
    );
}


export default App;