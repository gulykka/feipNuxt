<template>
  <div class="map_container">
    <yandex-map
        :settings="{
    location: {
      center: [131.924416, 43.116247],
      zoom: 11,
    },
    showScaleInCopyrights: true,
  }"
        :width="width"
        height="500px"
    >
      <yandex-map-default-scheme-layer/>
      <yandex-map-default-features-layer/>
      <yandex-map-marker :key="marker.iconSrc" :settings="{ coordinates: marker.coordinates }"
                         position="top-center left-center">
      <img :src="marker.iconSrc">
      </yandex-map-marker>
      <YandexMapControls :settings="{ position: 'left' }">
        <YandexMapZoomControl />
      </YandexMapControls>
      <YandexMapControls :settings="{ position: 'top left' }">
        <YandexMapGeolocationControl />
      </YandexMapControls>
      <YandexMapControls :settings="{ position: 'top right' }">
        <YandexMapOpenMapsButton />
      </YandexMapControls>
    </yandex-map>
  </div>
</template>

<script>
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapGeolocationControl,
  YandexMapMarker,
  YandexMapOpenMapsButton,
  YandexMapZoomControl
} from "vue-yandex-maps";
import marker_location from '/src/assets/marker_locatiom.svg'

export default {
  name: "MapView",
  components: {
    YandexMapGeolocationControl,
    YandexMapZoomControl,
    YandexMapOpenMapsButton,
    YandexMapControls,
    YandexMapMarker,
    YandexMapDefaultSchemeLayer, YandexMapDefaultMarker, YandexMapDefaultFeaturesLayer, YandexMap
  },
  props: {
    width: String
  },
  data() {
    return {
      marker_location,
      marker: {
        coordinates: [131.953129, 43.153141],
        iconSrc: marker_location
      }
    }
  }
}
</script>

<style scoped lang="sass">
@media screen and (max-width: 1080px)
  yandex-map
    width: 300px
</style>