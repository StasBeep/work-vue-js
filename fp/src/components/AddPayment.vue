<template>
    <div>
        <input v-model="date" placeholder="date" />
        <input v-model="category" placeholder="category" />
        <input v-model="value" placeholder="value" />
        <button @click="onClick">Add Data</button>
    </div>
</template>

<script>
export default {
    name: 'AddPayment',

    data() {
        return {
            date: "",
            category: "",
            value: null
        }
    },

    methods: {
        onClick() {
            const { category, value } = this
            const data = {
                date: this.date || this.getCurrentData,
                category,
                value
            }
            this.$emit('addNewPayment', data, 'true')
        }
    },

    computed: {
        getCurrentData() {
            const today = new Date();
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    }
}
</script>

<style>

</style>