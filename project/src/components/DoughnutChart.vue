<template>
    <Doughnut
        id="my-chart-id"
        :data="chartData"
        :options="chartOptions"
    />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, DoughnutController, CategoryScale, LinearScale, ArcElement } from 'chart.js'

import { mapGetters } from "vuex";

ChartJS.register(Title, Tooltip, Legend, DoughnutController, CategoryScale, LinearScale, ArcElement)


export default {
    name: 'DoughnutChart',
    components: { Doughnut },

    props: {
        categList: Array,
        payList: Array
    },

    methods: {
        changeLabels(data) {
            if(this.chartData.labels.length == 0) {
                for(let i = 0; i < data.length; i++) {
                    this.chartData.labels.push(data[i]);
                }
            }
            this.updateDiagramm();
        },

        changeData(array) {
            for(let i = 0; i < array.length; i++) {
                this.chartData.datasets[0].data[i] = array[i];
            }
            this.updateDiagramm();
        },

        updateDiagramm() {
            console.log('Обновление')
        },

        countingPercent(array, item) {
            let sum = 0;
            for(let i = 0; i < array.length; i++) {
                if(item == array[i].category) {
                    sum += array[i].value;
                }
            }
            return sum;
        }
    },

    computed: {
        ...mapGetters({
            paymentsList: "getPaymentList",
            categoryList: "getCategoryList",
        }),

        chartDataChangeLabels() {
            this.changeLabels(this.categoryList);
            return this.categoryList;
        },

        chartDataChangeData() {
            let parametrDiagramm = {
                totalAmount: this.$store.getters.getFullPaymentValue,
                percent: [
                    this.countingPercent(this.paymentsList, 'Food') / this.$store.getters.getFullPaymentValue * 100,
                    this.countingPercent(this.paymentsList, 'Sport') / this.$store.getters.getFullPaymentValue * 100,
                    this.countingPercent(this.paymentsList, 'Education') / this.$store.getters.getFullPaymentValue * 100,
                    this.countingPercent(this.paymentsList, 'Family') / this.$store.getters.getFullPaymentValue * 100,
                    this.countingPercent(this.paymentsList, 'Auto') / this.$store.getters.getFullPaymentValue * 100,
                    this.countingPercent(this.paymentsList, 'Health')  / this.$store.getters.getFullPaymentValue * 100
                ],
                elementCount: {
                    Food: this.countingPercent(this.paymentsList, 'Food'),
                    Sport: this.countingPercent(this.paymentsList, 'Sport'),
                    Education: this.countingPercent(this.paymentsList, 'Education'),
                    Family: this.countingPercent(this.paymentsList, 'Family'),
                    Auto: this.countingPercent(this.paymentsList, 'Auto'),
                    Health: this.countingPercent(this.paymentsList, 'Health')
                }
            };

            this.changeData(parametrDiagramm.percent)

            return parametrDiagramm;
        }
    },

    data: () => ({
        chartData: {
                labels: ['Food', 'Sport', 'Education', 'Family', 'Auto', 'Health'],
                datasets:  [{
                    data: [100, 50, 20, 30, 40, 10],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(210, 200, 20)',
                        '#FF0000',
                        'green'
                    ],  
                    hoverOffset: 4
                }],
                type: "DoughnutController"
        },
        chartOptions: {
                // Вращение круга (что вверху, что внизу)
                rotation: -90,
                // Размер внутреннего выреза
                cutout: "60%",
                plugins: {
                    // Подпись внизу под графиком
                    title: {
                        display: true,
                        position: "top",
                        align: `center`,
                        text: "Costs by categories",
                        font: {
                            size: 20
                        },
                        color: 'black'
                    },
                    legend: {
                        position: "right",
                        align: "center",
                    }
                },
                animation: {
                    // Анимация плавности относительно прокрутки
                    animateRotate: true,
                    // Анимация плавности относительно ветра окружности
                    animateScale: true
                }
        },
    }),
}
</script>

<style>
/* Размер круга внутри */
canvas {
    max-height: 40%;
}
</style>