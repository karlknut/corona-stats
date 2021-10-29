<template>
  <v-card elevation="2" v-if="character">
    <v-img :src="character.image"></v-img>
    <v-card-title>{{character.name}}</v-card-title>
    <v-card-text>
      <ul>
        <li><b>Status:</b>{{character.status}}</li>
        <li><b>Gender:</b>{{character.gender}}</li>
        <li><b>Species:</b>{{character.species}}</li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  created(){
    this.$axios.get('https://rickandmortyapi.com/api/character/'+ this.$route.params.id).then(response => {
      this.character = response.data;
    }); 
  },
  data(){
    return {
      character: null
    }
  }
}
</script>

<style>

</style>