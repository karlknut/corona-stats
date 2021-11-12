<template>
  <div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"
export default {
    mounted(){
        const loader = new Loader({
            apiKey: "",
            version: "weekly"
        });

        loader.load().then(() => {
            let map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        });
    }
}
</script>

<style>
    #map {
        height: 800px;
    }
</style>