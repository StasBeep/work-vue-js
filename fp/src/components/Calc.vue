<template>
    <div>
        <div>
            <input type="number" 
                    id="op1"
                    placeholder="op1" 
                    v-model.number="operand1"
            > 
            <input type="number" 
                    id="op2"
                    placeholder="op2" 
                    v-model.number="operand2"
            >
            = {{ result }} - {{ fibResult }}
        </div>
        <div class="buttons">
            <button v-for="btn in buttons" 
                    :key="btn" 
                    @click="calculate(btn)"
            >
                    {{ btn }}
            </button>
        </div>
        <input type="checkbox" 
                @click="check = !check"
                id="dispKeyboard"
        >
        <label for="dispKeyboard">Отобразить экранную клавиатуру</label>
        <!-- v-if="check" -->
        <div class="collection" v-if="check">
            <button v-for="itemNum in collection" 
                    :key="itemNum"
                    @click="pushEl(itemNum, radioInp)"
            >
                {{ itemNum }}
            </button>
            <div>
                <input 
                    type="radio" 
                    name="operand" 
                    id="radio1"
                    @click="radioInp = true"
                    checked
                >
                <label for="radio1"
                    @click="radioInp = true"
                >
                    Операнд 1
                </label>
                <input 
                    type="radio" 
                    name="operand" 
                    id="radio2"
                    @click="radioInp = false"
                >
                <label for="radio2" 
                    @click="radioInp = false"
                >
                    Операнд 2
                </label>
            </div>
        </div>
        <span class="error" v-show="error">{{ error }}</span>
        <div class="strange-message">
            <template v-if="result < 0">Отрицательное число</template>
            <template v-else-if="result < 100">Число меньше 100</template>
            <template v-else>Число больше 100</template>
        </div>
        <div class="logs">
            {{ logs }}
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
        buttons: ['+', '-', '*', '/', '^', '[ ]'],
        collection: [0,1,2,3,4,5,6,7,8,9,"<"],
        fibResult: 0,
        logs: {},
        error: "",
        check: false,
        radioInp: true,
    }),

    // Ослеживание данных
    watch: {
        result: function(newValue, oldValue) {
            console.log(newValue, oldValue);
        },
        logs: {
            deep: true,
            handler() {
                console.log('deep');
            }
        },
        operand1: function(newValue, oldValue) {
            console.log(newValue, oldValue);
        }
    },

    methods: {

        fib(n){
            return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
        },

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

            
            const key = Date.now();
            const value = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
            this.$set(this.logs, key, value);
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
            this.result = this.operand1 + this.operand2;
            //this.fibResult = this.fib(this.operand1) + this.fib(this.operand2);
            // Слишком объёмная задача, снял её с действия
            //this.fibResult = this.fib1 + this.fib2;
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
                this.result = this.operand1 / this.operand2;
                // Если ничего не возвращать, то метод whole() не будет выполняться
                return this.result;
            } else {
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
        },

        pushEl(elBtn, op) {
            if(op){
                const inp = document.getElementById('op1');
                //console.log(inp);
                if(elBtn != '<'){
                    this.operand1 = this.pushNum(this.operand1, inp, elBtn);
                } else {
                    this.operand1 = this.deleteNum(this.operand1, inp);
                }
            } else {
                const inp = document.getElementById('op2');
                if(elBtn != '<'){
                    this.operand2 = this.pushNum(this.operand2, inp, elBtn);
                } else {
                    this.operand2 = this.deleteNum(this.operand2, inp);
                }
            }
        },

        pushNum(operator, i, n) {
            i.value += n;
            operator = parseFloat(i.value);
            return operator;
        },

        deleteNum(operator, i){
            let str = "";
            for(let j = 0; j < operator.toString().length - 1; j++){
                str += operator.toString()[j];
            }
            operator = parseFloat(str);
            i.value = operator;
            return operator;
        }
    },
    // Вычисляемые свойства
    computed: {
        /*fib1() {
            console.log(this.fib(this.operand1))
            return this.fib(this.operand1)
        },

        fib2() {
            console.log(this.fib(this.operand2))
            return this.fib(this.operand2)
        }*/
    }
}
</script>

<style scoped>
    .error {
        color: red;
        text-transform: uppercase;
    }
</style>