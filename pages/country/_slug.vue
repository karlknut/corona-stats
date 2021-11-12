<template>
<div>
    <v-btn @click="addData">Do things</v-btn>
   <chart :data="data" :labels="labels" :dataLabel="dataLabel"></chart>
</div>
</template>

<script>
import Chart from '~/components/Chart.vue';
export default {
    components: { Chart },
    created(){
        this.$store.dispatch('getCountry', this.$route.params.slug);
    },
    data(){
        return {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            dataLabel: 'My Data',
            data: [0, 10, 5, 2, 20, 30, 45]
        }
    },
    methods: {
        addData(){
            
            //this.data[0]++; // not reactive
            //this.data.splice(0,1,this.data[0]+1); // acts weirdly with chartjs
            //this.$set(this.data, 0, this.data[0]+1);

            let newData = [...this.data];
            newData[0]++;
            this.data = newData;
            
     
        }
    }
}
</script>

<style>

</style>