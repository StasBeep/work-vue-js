<template>
    <div>
        <div>
            <input type="number" placeholder="op1" v-model.number="operand1">
            <input type="number" placeholder="op2" v-model.number="operand2">
            = {{ sum }}
        </div>
        <div>
            <button @click="sum = operand1 + operand2">+</button>
            <button @click="sum = operand1 - operand2">-</button>
            <button @click="sum = operand1 * operand2">*</button>
            <button @click="div">/</button>
        </div>
        <!--<div v-on:mouseover=""></div>-->
        {{ sum }}
    </div>
</template>

<script>
export default {
    name: 'CalcItem',

    data: () => ({
        operand1: 0,
        operand2: 0,
        sum: 0
    }),

    methods: {
        div() {
            this.sum = this.operand1 / this.operand2
        }
    }
}
</script>

<style>

</style>