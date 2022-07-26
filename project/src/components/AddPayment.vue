<template>
    <div>
        <button class="btn-hide" v-show="show" @click="show = !show">add new cost +</button>
        <div v-show="!show">
            <input v-model="date" class="enter-input" placeholder="date">
            <CategorySelect
                @select="onSelect"
                :categoryList="categoryList" />
            <input v-model.number="value" class="enter-input" type="number" placeholder="value">
            <button @click="onClick" class="btn-add">Add Data</button>
            <button class="btn-hide" @click="show = !show">hide -</button>
        </div>
    </div>
</template>

<script>

import CategorySelect from './CategorySelect.vue'

import { mapGetters } from 'vuex'

export default {
    name: "AddPayment",

    components: {
        CategorySelect,
    },

    data: () => ({
        date: "",
        category: "",
        value: null,
        show: true,
    }),

    methods: {
        goToPageDashboard() {
            this.$router.push({
                name: 'dashboard'
            })
        },

        onSelect(el) {
            this.category = el
        },

        onClick() {
            const { category, value } = this
            const data = {
                data: this.date || this.getCurrentDate,
                category,
                value
            }
            // console.log(data);
            // Вызов события, название события и аргументы
            
            if(this.getValueStatusRoute && this.getParamsCategoryStatusRoute) {
                this.$store.commit('addDataToPaymentList', data)
                this.goToPageDashboard()
            }
            
            this.$emit('addNewPayment', data);
        },
    },

    computed: {
        // Список getters
        ...mapGetters({
            categoryList: 'getCategoryList'
        }),
        
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        },

        // Момент запроса есть ли value, если нет, то вернуть null
        getValueStatusRoute() {
            // console.log(this.$route.query?.value)
            return Number(this.$route.query?.value) ?? null
        },

        getParamsCategoryStatusRoute() {
            // console.log(this.$route)
            return this.$route.params?.category ?? null
        }
    },

    // Компонент ещё не смонтирован
    created() {
        if(!this.getValueStatusRoute && !this.getParamsCategoryStatusRoute) {
            this.goToPageDashboard()
        }
        this.category = this.getParamsCategoryStatusRoute
        this.value = this.getValueStatusRoute
    },

    // Момент монтирования
    mounted() {
        // открытие дабавочного элемента
        if(this.getValueStatusRoute && this.getParamsCategoryStatusRoute) {
            this.show = false
        }
    },
}
</script>

<style scoped lang="scss">
    .btn-hide {
        padding: 8px 20px;
        text-transform: uppercase;
        background: #30d5c8;
        border: none;
        cursor: pointer;
        color: white;
        transition: 1s ease;

        &:hover {
            color: black;
            transform: scale(1.1);
        }
    }

    .btn-add {
        padding: 8px 20px;
        border: none;
        background: red;
        cursor: pointer;
        color: white;
        transition: 1s ease;

        &:hover {
            color: black;
            transform: scale(1.1);
        }
    }

    .enter-input {
        padding: 6px 10px;
        border: 1px solid grey;
        outline: none;
    }
</style>