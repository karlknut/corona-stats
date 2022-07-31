<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12"
               lg="6">
          <v-menu v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field :value="computedDateFormattedMomentjs"
                            v-model="dateRangeText"
                            clearable
                            label="Choose Date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            @click:clear="date = null"
                            width="50px"></v-text-field>
            </template>
            <v-date-picker v-model="dates"
                           range
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="dataLabel='confirmed'">Confirmed</v-btn>
    <v-btn @click="dataLabel='deaths'">Deaths</v-btn>
    <chart :data="$store.getters[dataLabel]" :labels="$store.getters.labels" :dataLabel="dataLabel" v-model="chart"></chart>
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
          dataLabel: 'confirmed',
          dates: null,
          menu1: false,
        }
    },

    computed: {
      dateRangeText() {
        if (this.dates){
          return this.dates.join(' - ');
        }
      },
    },
}
</script>

<style>

</style>
