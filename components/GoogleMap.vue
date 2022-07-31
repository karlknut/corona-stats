<template>
  <div ref="map"></div>
</template>

<script>
  import { Loader } from "@googlemaps/js-api-loader"
  export default {
    props: ['center', 'zoom', 'geoJson', 'mapStyle'],
    mounted() {
      const loader = new Loader({
        apiKey: this.$config.googleApiKey,
        version: "weekly"
      });

      loader.load().then(() => {
        this.map = new google.maps.Map(this.$refs['map'], {
          center: this.center,
          zoom: this.zoom,
        });
        this.map.data.addGeoJson(this.geoJson);
        this.map.data.setStyle(this.mapStyle);
      });
    },
    data() {
      return {
        markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
      ],
        map: null,
      }
    },
    watch: {
      center(newCenter) {
        this.map.panTo(newCenter);
      },
      zoom(newZoom) {
        this.map.setZoom(newZoom);
      },
      geoJson(geoJson) {
        this.map.data.addGeoJson(geoJson);
      },
      mapStyle(mapStyle) {
        console.log('setStyle');
        this.map.data.setStyle(mapStyle);
      }
    }
  }
</script>

<style scoped>
  div {
    height: 800px;
  }
</style>
