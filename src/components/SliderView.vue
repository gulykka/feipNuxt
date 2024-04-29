<template>
  <Swiper class="slides">
    <SwiperSlide v-for="slide in slides" class="swiper_slide">
      <figure class="slide">
        <picture>
          <source
              :srcset='`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`'
              media='(min-width: 768px)'
          >
          <source
              :srcset='`$ {slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`'
              media='(max-width: 767px)'
          >
          <img :src='slide.image_landscape.x1'
               :alt='slide.title'>
        </picture>
        <figcaption class="slide_title">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.text }}</p>
        </figcaption>
      </figure>
    </SwiperSlide>
    <SliderControls/>
  </Swiper>
</template>

<script>
import slide3_l_1x from '../assets/images/sliders/slide_1_landscape_@1.jpg'
import slide3_l_2x from '../assets/images/sliders/slide_1_landscape_@2.jpg'
import slide3_p_1x from '../assets/images/sliders/slide_1_portrait_@1.jpg'
import slide3_p_2x from '../assets/images/sliders/slide_1_portrait_@2x.jpg'

import slide2_l_1x from '../assets/images/sliders/slide_2_landscape_@1.jpg'
import slide2_l_2x from '../assets/images/sliders/slide_2_landscape_@2.jpg'
import slide2_p_1x from '../assets/images/sliders/slide_2_portrait_@1.jpg'
import slide2_p_2x from '../assets/images/sliders/slide_2_portrait_@2.jpg'

import slide1_l_1x from '../assets/images/sliders/slide_3_landscape_@1.jpg'
import slide1_l_2x from '../assets/images/sliders/slide_3_landscape_@2.jpg'
import slide1_p_1x from '../assets/images/sliders/slide_3_portrait_@1.jpg'
import slide1_p_2x from '../assets/images/sliders/slide_3_portrait_@2.jpg'

import SliderControls from "./SliderControls.vue";

export default {
  name: "SliderView",
  components: {
    slide1_l_1x, slide1_l_2x, slide1_p_1x, slide1_p_2x,
    slide2_l_1x, slide2_l_2x, slide2_p_1x, slide2_p_2x,
    slide3_l_1x, slide3_l_2x, slide3_p_1x, slide3_p_2x,
    SliderControls
  },
  data() {
    return {
      slides: [
        {
          image_portrait: {
            x1: slide1_p_1x,
            x2: slide1_p_2x
          },
          image_landscape: {
            x1: slide1_l_1x,
            x2: slide1_l_2x
          },
          title: 'Проектируем и строим загородные дома',
          text: 'Строим дома "под ключ": от этапа проектирования до финишной отделки помещений'
        },
        {
          image_portrait: {
            x1: slide2_p_1x,
            x2: slide2_p_2x
          },
          image_landscape: {
            x1: slide2_l_1x,
            x2: slide2_l_2x
          },
          title: 'Проектируем и строим загородные дома',
          text: 'Строим дома "под ключ": от этапа проектирования до финишной отделки помещений'
        },
        {
          image_portrait: {
            x1: slide3_p_1x,
            x2: slide3_p_2x
          },
          image_landscape: {
            x1: slide3_l_1x,
            x2: slide3_l_2x
          },
          title: 'Проектируем и строим загородные дома',
          text: 'Строим дома "под ключ": от этапа проектирования до финишной отделки помещений'
        },
      ]
    }
  }
}
</script>

<style scoped lang="sass">

.slide
  position: relative

.slides
  width: 100%

img
  border-radius: 30px
  width: 100%

.slide_title
  position: absolute
  bottom: 0
  max-width: 500px
  left: 0
  padding-bottom: 113px
  padding-inline: 144px
  color: white
  display: flex
  flex-direction: column
  row-gap: 10px
  width: 100%

h2
  font-family: Montserrat
  font-size: 50px

p
  font-family: Montserrat
  font-size: 18px

@media screen and (max-width: 1200px)
  h2
    font-size: 40px
  .slide_title
    padding-bottom: 80px
@media screen and (max-width: 1000px)
  h2
    font-size: 30px
  .slide_title
    padding-bottom: 70px
    padding-inline: 90px
    max-width: 400px
@media screen and (max-width: 767px)
  h2
    font-size: 50px
  p
    font-size: 20px
  .slide_title
    padding-inline: 50px

@media screen and (max-width: 640px)
  h2
    font-size: 40px
  .slide_title
    padding-bottom: 70px
    padding-inline: 60px
    max-width: 300px
</style>