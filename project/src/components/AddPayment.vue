<template>
    <div>
        <input v-model="date" placeholder="date">
        <input v-model="category" placeholder="category">
        <input v-model="value" placeholder="value">
        <button @click="onClick">Add Data</button>
    </div>
</template>

<script>
export default {
    name: "AddPayment",

    data() {
        return {
            date: "",
            category: "",
            value: null,
        }
    },

    methods: {
        onClick() {

        }
    }
}
</script>

<style>

</style>