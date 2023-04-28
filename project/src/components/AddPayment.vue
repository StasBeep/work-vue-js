<template>
    <v-card class="py-4 px-4">
        <v-text-field v-model="date" label="Date" placeholder="date"/>
        <v-select v-model="category" label="Category" :items="categoryList" />
        <v-text-field v-model.number="value" label="number" type="number" placeholder="value" />
        <button @click="onClick" class="btn-add">Add Data</button>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "AddPayment",

    data: () => ({
        date: "",
        category: "",
        value: null,
    }),

    methods: {
        goToPageDashboard() {
            this.$router.push({
                name: 'dashboard/1'
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

</style>