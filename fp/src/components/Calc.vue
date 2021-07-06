<template>
    <div>
        <div>
            <input type="number" 
                    placeholder="op1" 
                    v-model.number="operand1
            "> 
            <input type="number" 
                    placeholder="op2" 
                    v-model.number="operand2
            ">
            = {{ result }}
        </div>
        <div>
            <button @click="calculate()">+</button>
            <button @click="calculate('-')">-</button>
            <button v-on:click="calculate('*')">*</button>
            <button v-on:click="calculate('/')">/</button>
            <button @click="calculate('^')">^</button>
            <button @click="calculate('[ ]')">[ ]</button>
        </div>
        <span class="error" v-show="error">{{ error }}</span>
        <div class="strange-message">
            <template v-if="result < 0">Отрицательное число</template>
            <template v-else-if="result < 100">Число меньше 100</template>
            <template v-else>Число больше 100</template>
        </div>
    </div>
</template>

<script>
export default {
    name: "Calc",
    data:() => ({
        operand1: 0,
        operand2: 0,
        result: 0,
        show: false,
        error: "",
    }),
    methods: {

        // Оптимизация работы калькулятора (switch)
        calculate(operation = "+") {
            this.error = "";

            switch(operation) {
                case "+":
                    this.add();
                    break;
                case "-":
                    this.substract();
                    break;
                case "*":
                    this.multiply();
                    break;
                case "/":
                    this.div();
                    break;
                case "^":
                    this.degree();
                    break;
                case "[ ]":
                    this.whole();
                    break;
            }
        },

        // Калькулятор через объекты и ключи
        /*calculate(op = "+") {
            const calcOperations = {
                '+': () => this.operand1 + this.operand2,
                '-': () => this.operand1 - this.operand2,
                '*': () => this.operand1 * this.operand2,
                '/': () => this.operand1 / this.operand2,
                '^': () =>  Math.pow(this.operand1, this.operand2),
                '[ ]': () => Math.round(this.div()),
            }
            this.result = calcOperations[op]()
        },*/


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
                this.error = "На 0 делить нельзя!!!";
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

<style scoped>
    .error {
        color: red;
        text-transform: uppercase;
    }
</style>