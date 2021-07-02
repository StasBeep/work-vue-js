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
            <button v-on:click="sum = operand1 * operand2">*</button>
            <button>Event</button>
        </div>
        <!--<div v-on:mouseover=""></div>-->
        result : {{ sum }}
    </div>
</template>

<script>
export default {
    name: "Calc",
    data:() => ({
        operand1: 0,
        operand2: 0,
        sum: 0
    })
}
</script>

<style>

</style>