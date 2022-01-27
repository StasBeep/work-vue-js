import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // Начальная точка отсчёта (состояние)
    state: {
        paymentsList: [],
        categoryList: []
    },

    // Изменение данных
    mutations: {
        // Метод добавления/изменения данных
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },

        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload);
        },

        // Метод изменения данных
        updateItem(state, payload) {
            state.paymentsList[payload.idx] = payload;
            state.paymentsList = [...state.paymentsList];
            // Vue.set(state.paymentsList, 0, payload);
        },

        setCategoryList(state, payload) {
            state.categoryList = payload;
        }
    },

    // Запускают mutations
    // Запрос -> получение -> вызов действий mutations
    actions: {
        fetchData({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [];
                    for(let i = 1; i < 50; i++){
                        items.push({
                            data: "23.12.2020",
                            category: "Sport",
                            value: i,
                            id: i
                        })
                    }
                    resolve(items)
                }, 2000)
            }).then(res => {
                commit('setPaymentListData', res);
            })
        },

        fetchCategory({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Sport', 'Education', 'Family', 'Auto', 'Health'])
                }, 1000)
            }).then(res => {
                commit('setCategoryList', res)
            })
        }
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
        }, 
        
        getCategoryList: state => state.categoryList,
    }
})