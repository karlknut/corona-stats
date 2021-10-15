<template>
  <div>
    <v-btn class="my-3" @click="prev" :disabled="!pagination.prev">Prev</v-btn>
    <v-btn class="float-right my-3" @click="next" :disabled="!pagination.next">Next</v-btn>
    <v-row>
      <v-col :cols="3" v-for="result in results" :key="'result-' + result.id">
        <v-card elevation="2">
          <v-img :src="result.image"></v-img>
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
  </div>
</template>

<script>
export default {
  created(){
    this.$axios.get('https://rickandmortyapi.com/api/character').then(response => {
      this.results = response.data.results;
      this.pagination = response.data.info;
    });
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
  },
  methods: {
    next(){
      this.$axios.get(this.pagination.next).then(response => {
        this.results = response.data.results;
        this.pagination = response.data.info;
      });
    },
    prev(){
      this.$axios.get(this.pagination.prev).then(response => {
        this.results = response.data.results;
        this.pagination = response.data.info;
      });
    }
  }
}
</script>

<style>

</style>