<template>
    <div>
        <button class="btn-hide" v-show="show" @click="show = !show">add new cost +</button>
        <div v-show="!show">
            <input v-model="date" class="enter-input" placeholder="date">
            <input v-model="category" class="enter-input" placeholder="category">
            <input v-model.number="value" class="enter-input" type="number" placeholder="value">
            <button @click="onClick" class="btn-add">Add Data</button>
            <button class="btn-hide" @click="show = !show">hide -</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPayment",

    data: () => ({
        date: "",
        category: "",
        value: null,
        show: true,
    }),

    methods: {
        onClick() {
            const { category, value } = this
            const data = {
                data: this.date || this.getCurrentDate,
                category,
                value
            }
            // console.log(data);
            // Вызов события, название события и аргументы

            this.$emit('addNewPayment', data);
        },
    },

    computed: {
        getCurrentDate() {
            const today = new Date();
            const d = today.getDate();
            const m = today.getMonth() + 1;
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        }
    }
}
</script>

<style scoped>
    .btn-hide {
        padding: 8px 20px;
        text-transform: uppercase;
        background: #30d5c8;
        border: none;
        cursor: pointer;
        color: white;
        transition: 1s ease;
    }

    .btn-hide:hover {
        color: black;
        transform: scale(1.1);
    }

    .btn-add {
        padding: 8px 20px;
        border: none;
        background: red;
        cursor: pointer;
        color: white;
        transition: 1s ease;
    }

    .btn-add:hover {
        color: black;
        transform: scale(1.1);
    }

    .enter-input {
        padding: 6px 10px;
        border: 1px solid grey;
        outline: none;
    }
</style>