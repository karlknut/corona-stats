<template>
   <canvas id="myChart"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    created(){
        this.$store.dispatch('getCountry', this.$route.params.slug);
    },
    mounted(){
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgb(0, 233, 132)',
                borderColor: 'rgb(0, 233, 132)',
                data: [0, 10, 5, 2, 20, 30, 45].reverse(),
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        ); 
    }
}
</script>

<style>

</style>