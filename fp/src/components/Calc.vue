<template>
    <div>
        <div>
            <input type="number" placeholder="op1" v-model.number="operand1"> 
            <input type="number" placeholder="op2" v-model.number="operand2">
            = {{ result }}
        </div>
        <div>
            <button @click="add">+</button>
            <button @click="substract">-</button>
            <button v-on:click="multiply">*</button>
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
        result: 0,
        show: false
    }),
    methods: {
        // Cложение
        add() {
            this.result = this.operand1 + this.operand2
        },
        // Вычитание
        substract () {
            this.result = this.operand1 - this.operand2
        },
        // Умножение 
        multiply() {
            this.result = this.operand1 * this.operand2
        },
        // Деление
        div() {
            if(this.operand2 != 0){
                this.show = false;
                this.result = this.operand1 / this.operand2;
                // Если ничего не возвращать, то метод whole() не будет выполняться
                return this.result;
            } else {
                this.show = true;
            }
        },

        // Возведение в степень
        degree() {
            this.result = Math.pow(this.operand1, this.operand2)
        },

        // Округление и выделение целой части
        whole() {
            this.result = Math.round(this.div());
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