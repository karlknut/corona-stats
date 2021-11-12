<template>
  <div>
    <v-text-field
            v-model="search"
            dense
            filled
            label="Search"
          ></v-text-field>
    <v-row>
      <v-col :cols="3" v-for="country in $store.getters.filteredCountries" :key="'result-' + country.ID">
        <v-card elevation="2">
          <v-card-title>{{country.Country}}</v-card-title>
          <v-card-text>
            <ul>
              <li><b>New Confirmed:</b>{{country.NewConfirmed}}</li>
              <li><b>Total Confirmed:</b>{{country.TotalConfirmed}}</li>
              <li><b>New Deaths:</b>{{country.NewDeaths}}</li>
              <li><b>Total Deaths:</b>{{country.TotalDeaths}}</li>
              <li><b>New Recovered:</b>{{country.NewRecovered}}</li>
              <li><b>Total Recovered:</b>{{country.TotalRecovered}}</li>          
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('getSummary');
  },
  methods: {
    
  },
  computed: {
    search: {
      get(){
        return this.$store.state.search;
      },
      set(value){
        this.$store.commit('SET_SEARCH', value);
      }
    }
  }
}
</script>

<style>

</style>