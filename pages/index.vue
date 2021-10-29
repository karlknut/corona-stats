<template>
  <div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="$store.state.pagination.pages"
        :total-visible="7"
        @previous="prev"
        @next="next"
        @input="getPage"
      ></v-pagination>
    </div>
    <v-row>
      <v-col :cols="3" v-for="result in $store.state.results" :key="'result-' + result.id">
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
      this.$store.commit('SET_PAGE', parseInt(this.$route.query.page)); 
    }
    this.$store.dispatch('getPage', this.$store.state.page);
  },
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
    let page = 1;
    if(to.query.page){
      page = parseInt(to.query.page); 
    }
    this.$store.commit('SET_PAGE', page);
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
      this.$store.dispatch('getPage', page);
    }
  },
  computed: {
    page:{
      set(value){
        this.$store.commit('SET_PAGE', value);
      },
      get(){
        return this.$store.state.page;
      }
    }
  }
}
</script>

<style>

</style>