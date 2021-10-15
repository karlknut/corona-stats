<template>
<v-row>
  <v-col :cols="3" v-for="(result, index) in results" :key="'result-' + result.id">
    <v-card elevation="2">
      <v-card-title>{{result.name}}</v-card-title>
      <v-card-text>
        <ul>
          <li><b>Status:</b>{{result.status}}</li>
          <li><b>Gender:</b>{{result.gender}}</li>
          <li><b>Species:</b>{{result.species}}</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>
</template>

<script>
export default {
  created(){
    this.$axios.get('https://rickandmortyapi.com/api/character').then(response => {
      console.log(response);
      this.results = response.data.results;
      this.pagination = response.data.info;
    })
  },
  data(){
    return {
      results: [],
      pagination: {
        count: 0,
        next: null,
        pages: 0,
        prev: null,
      }
    }
  }
}
</script>

<style>

</style>