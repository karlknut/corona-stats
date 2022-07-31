<template>
  <div>
    <v-btn @click="center={lat: 59.4268549, lng:24.7433906}; zoom=19">go to somewhere</v-btn>
    <v-btn @click="styleProperty='deaths'">Deaths</v-btn>
    <v-btn @click="styleProperty='confirmed'">Confirmed</v-btn>
    <google-map :center="center" :zoom="zoom" :geoJson="covidGeoJson" :mapStyle="style" :key="styleProperty"></google-map>
  </div>
</template>

<script>
  import GoogleMap from '~/components/GoogleMap.vue'

  export default {
    components: { GoogleMap },
    created() {
      this.$axios.get('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(response => {
          this.geoJson = response.data;
        });
      this.$store.dispatch('getSummary');
    },
    data() {
      return {
        center: { lat: 44, lng: 24 },
        zoom: 4,
        geoJson: null,
        styleProperty: 'confirmed'
      }
    },
    computed: {
      covidGeoJson() {
        if (this.geoJson && this.$store.state.countries) {
          let covidGeoJson = { ...this.geoJson };
          covidGeoJson.features = covidGeoJson.features.map(feature => {
            let country = this.$store.state.countries.find(country => {
              return country.Country.toLowerCase() == feature.properties.name.toLowerCase()
            });
            feature.properties.confirmed = -1;
            feature.properties.deaths = -1;
            if (country) {
              feature.properties.confirmed = country.TotalConfirmed;
              feature.properties.deaths = country.TotalDeaths;
            }
            return feature;
          });
          return covidGeoJson;
        }
        return null;
      },
      style() {
        return (feature) => {
          let property = feature.getProperty(this.styleProperty);
          let color = property == -1 ? 'black' :
            property > 10000000 ? '#f00' :
              property > 1000000 ? '#c20' :
                property > 100000 ? '#a40' :
                  property > 10000 ? '#860' :
                    property > 1000 ? '#680' :
                      property > 100 ? '#4a0' :
                        property > 10 ? '#2c0' :
                          property > 1 ? '#1d0' :
                            'green';
          return {
            fillColor: color,
            strokeWeight: 1
          };
        }
      }
    },
    methods: {

    }

  }
</script>

<style>
</style>
