<template>
  <div class="navigation">
    <ButtonGreen @click="swiper.slidePrev()" class="prev"><img :src="arrow" alt="Дальше"></ButtonGreen>
    <div class="pagination">
      <ButtonCircle
          v-for="(slide, index) in swiper.slides"
          @click="swiper.slideTo(index)"
          :title="`Открыть ${index + 1} слайд`"
          :disabled="swiper.activeIndex === index"
      >
        {{ index + 1 }}
      </ButtonCircle>
    </div>
    <ButtonGreen @click="swiper.slideNext()" class="next"><img :src="arrow" alt="Дальше"></ButtonGreen>
  </div>

</template>

<script>
import arrow from '../assets/images/arrow.svg'
import ButtonGreen from "./ButtonGreen.vue";
import ButtonCircle from "./ButtonCircle.vue";
export default {
  name: "SliderControls",
  components: {
    ButtonGreen,
    ButtonCircle,
  },
  data() {
    return {
      arrow
    }
  },
  setup() {
    const swiper = useSwiper()
    return {
      swiper,
    }
  }
}
</script>

<style scoped lang="sass">
.navigation
  position: absolute
  z-index: 1
  display: flex
  justify-content: space-between
  top: 0
  height: 100%
  width: 100%
  left: 0
.pagination
  align-self: flex-end
  margin-bottom: 20px
  display: flex
  column-gap: 16px
.next, .prev
  align-self: center
  margin: 20px
  width: 48px
  height: 48px
.prev
  rotate: 180deg
@media screen and (max-width: 767px)
  .prev, .next, .pagination
    display: none

</style>