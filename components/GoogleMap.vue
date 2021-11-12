<template>
  <div ref="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
export default {
    props: ['center', 'zoom'],
    mounted(){
        const loader = new Loader({
            apiKey: this.$config.googleApiKey,
            version: "weekly"
        });

        loader.load().then(() => {
            this.map = new google.maps.Map(this.$refs['map'], {
                center: this.center,
                zoom: this.zoom,
            });
        });
    },
    data(){
        return {
            map: null
        }
    },
    watch: {
        center(newCenter){
            this.map.panTo(newCenter);
        },
        zoom(newZoom){
            this.map.setZoom(newZoom);
        }
    }
}
</script>

<style scoped>
    div {
        height: 800px;
    }
</style>