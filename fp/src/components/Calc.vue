<template>
    <div>
        <div>
            <input type="number" placeholder="op1" v-model.number="operand1">
            <input type="number" placeholder="op2" v-model.number="operand2">
            = {{ sum }}
        </div>
        <div class="collection">
            <button v-for="(item, idx) in collection" :key="idx">
                {{ item }}
            </button>
        </div>
                <div class="buttons">
            <button v-for="btn in buttons"
                :key="btn"
                @click="calculate(btn)">
                    {{ btn }}
            </button>
        </div>
        <div class="error" v-show="error"> Ошибка: {{ error }}</div>
        <div class="strange-message">
            <template v-if="sum < 0">Отрицательное число</template>
            <template v-else-if="sum < 100"> Число меньше 100</template>
            <template v-else>Число больше 100</template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalcItem',

    data: () => ({
        operand1: 0,
        operand2: 0,
        sum: 0,
        buttons: ["+","-","*","/","^"],
        collection: [0,1,2,3,4,5,6,7,8,9],
        error: ""
    }),

    methods: {
        calculate(operation = "+") {
            this.error = ""
            switch (operation) {
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
            }
        },

        add() {
            this.sum = this.operand1 + this.operand2
        },

        substract() {
            this.sum = this.operand1 - this.operand2
        },

        div() {
            const { operand1, operand2 } = this
            if(operand2 === 0){
                this.error = "На 0 делить нельзя!!"
            } else {
                this.sum = operand1 / operand2
            }
        },

        multiply() {
            this.sum = this.operand1 * this.operand2
        },

        degree() {
            this.sum = Math.pow(this.operand1, this.operand2);
        }
    }
}
</script>

<style scoped>

.error {
    color: red;
}

</style>