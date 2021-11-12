<template>
<div>
   <v-btn @click="dataLabel='confirmed'">Confirmed</v-btn>
   <v-btn @click="dataLabel='deaths'">Deaths</v-btn>
   <chart :data="$store.getters[dataLabel]" :labels="$store.getters.labels" :dataLabel="dataLabel"></chart>
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
            dataLabel: 'confirmed'
        }
    }
}
</script>

<style>

</style>