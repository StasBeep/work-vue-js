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

ChartJS.register(Title, Tooltip, Legend, DoughnutController, CategoryScale, LinearScale, ArcElement)


export default {
    name: 'DoughnutChart',
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets:  [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
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
        }
    }
}
</script>

<style>
/* Размер круга внутри */
canvas {
    max-height: 40%;
}
</style>