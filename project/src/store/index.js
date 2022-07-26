import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // Начальная точка отсчёта (состояние)
    state: {
        paymentsList: [],
        categoryList: [],
        defaultFetchData: [
            {
                data: "28.03.2020",
                category: "Food",
                value: 169
            },
            {
                data: "20.04.2021",
                category: "Sport",
                value: 400
            },
            {
                data: "20.05.2021",
                category: "Education",
                value: 200
            },
            {
                data: "01.03.2019",
                category: "Family",
                value: 2000
            },
            {
                data: "25.07.2020",
                category: "Sport",
                value: 500
            },
            {
                data: "05.11.2020",
                category: "Food",
                value: 1140
            },
            {
                data: "17.01.2019",
                category: "Sport",
                value: 700
            },
            {
                data: "30.07.2021",
                category: "Education",
                value: 120
            },
            {
                data: "12.09.2015",
                category: "Family",
                value: 2000
            },
            {
                data: "08.10.2021",
                category: "Auto",
                value: 500
            },
        ]
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
                    let n = Number(this.state.defaultFetchData.length);
                    // console.log(n)
                    // console.log(this.state.defaultFetchData[0])
                    for(let i = 0; i < 50 ; i++){
                        if(n !== 0) {
                            items.push({
                                data: this.state.defaultFetchData[i].data,
                                category: this.state.defaultFetchData[i].category,
                                value: this.state.defaultFetchData[i].value,
                                id: i + 1
                            });
                            n--;
                        }else {
                            items.push({
                                data: "23.12.2020",
                                category: "Sport",
                                value: i,
                                id: i
                            })
                        }
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