import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // Начальная точка отсчёта (состояние)
    state: {
        paymentsList: []
    },

    // Изменение данных
    mutations: {
        // Метод добавления/изменения данных
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        }
    },

    // Запускают mutations
    // Запрос -> получение -> вызов действий mutations
    actions: {

    },

    // "Выдача" данных
    // Возвращает значения state или других состояний
    // Преобразовать данные и вернуть
    getters: {
        // Возвращает сосотояние paymentList
        getPaymentList: state => state.paymentsList,
        // Считает все наши затраты
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res,cur) => res + cur.value, 0)
        }
    }
})