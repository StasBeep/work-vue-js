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
            <button v-on:click="div">/</button>
            <button @click="degree">^</button>
            <button @click="whole">[ ]</button>
        </div>
        <span class="error" v-if="show">на 0 делить нельзя!!!</span>
    </div>
</template>

<script>
export default {
    name: "Calc",
    data:() => ({
        operand1: 0,
        operand2: 0,
        sum: 0,
        show: false
    }),
    methods: {
        // Деление
        div() {
            if(this.operand2 != 0){
                this.show = false;
                this.sum = this.operand1 / this.operand2;
                return this.sum;
            } else {
                this.show = true;
            }
        },

        // Возведение в степень
        degree() {
            this.sum = Math.pow(this.operand1, this.operand2)
        },

        // Округление и выделение целой части
        whole() {
            this.sum = Math.round(this.div());
        }
    }
}
</script>

<style>
    .error {
        color: red;
        text-transform: uppercase;
    }
</style>