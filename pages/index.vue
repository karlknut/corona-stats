<template>
  <div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="pagination.pages"
        :total-visible="7"
        @previous="prev"
        @next="next"
        @input="getPage"
      ></v-pagination>
    </div>
    <v-row>
      <v-col :cols="3" v-for="result in results" :key="'result-' + result.id">
        <v-card elevation="2">
          <v-img :src="result.image"></v-img>
          <v-card-title><router-link :to="'/character/' + result.id">{{result.name}}</router-link></v-card-title>
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
    if(this.$route.query.page){
      this.page = parseInt(this.$route.query.page);
    }
    this.getPageData(this.page);
  },
  data(){
    return {
      page: 1,
      results: [],
      pagination: {
        count: 0,
        next: null,
        pages: 0,
        prev: null,
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    this.page = 1;
    if(to.query.page){
      this.page = parseInt(to.query.page); 
    }
    this.getPageData(this.page);
    next();
  },
  methods: {
    next(){
      this.getPage(this.page+1);
    },
    prev(){
      this.getPage(this.page-1);
    },
    getPage(page){
      this.$router.push('/?page=' + page);
      this.getPageData(page);
    },
    getPageData(page){
      this.$axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          page: page
        }
      }).then(response => {
        this.results = response.data.results;
        this.pagination = response.data.info;
      });
    }
  }
}
</script>

<style>

</style>