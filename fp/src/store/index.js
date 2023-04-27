import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
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
                data: "28.03.2020",
                category: "Sport",
                value: 2000
            },
            {
                data: "28.03.2020",
                category: "Internet",
                value: 900
            },
            {
                data: "28.03.2020",
                category: "Car",
                value: 5600
            },
        ]
    },

    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },

        addDataToPaymentsList(state, payload) {
            state.paymentsList.push(payload);
        },

        addCategoryList(state, payload) {
            state.categoryList = payload;
        }
    },

    actions: {
        fetchData({commit}) {
            return new Promise ((resolve) => {
                setTimeout(() => {
                    const items = []
                    let n = Number(this.state.defaultFetchData.length)
                    for(let i = 0; i < 50; i++){
                        if(n !== 0) {
                            items.push({
                                data: this.state.defaultFetchData[i].data,
                                category: this.state.defaultFetchData[i].category,
                                value: this.state.defaultFetchData[i].value
                            })
                            n--;
                        } else {
                            items.push({
                                data: "23.12.2020",
                                category: 'Sport',
                                value: i
                            })
                        }
                    }
                    resolve(items)
                }, 2000)
            }).then(res => {
                commit('setPaymentListData', res)
            })
        },

        fetchCategory({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Sport', 'Education', 'Family', 'Auto', 'Health'])
                }, 1000)
            }).then(res => {
                commit('setCategoryList', res)
            })
        }
    },

    getters: {
        getPaymentList: state => state.paymentsList,

        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
        }
    }
})