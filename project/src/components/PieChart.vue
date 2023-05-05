<template>
    <Doughnut
        id="my-chart-id"
        :data="chartData"
    />
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, DoughnutController, CategoryScale, LinearScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, DoughnutController, CategoryScale, LinearScale, ArcElement)


export default {
    name: 'PieChart',
    components: { Doughnut },
    data() {
        return {
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets:  [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],  
                    hoverOffset: 4
                }],
                type: "DoughnutController"
            }
        }
    }
}
</script>