<template>
  <DialogView
      v-if="isVisible"
      @visible="showDialog">
  </DialogView>
  <WindowView
      v-if="isVisibleWindow"
      @visible="showWindow">
  </WindowView>
  <div class="container">
    <div class="header">
      <div class="information">
        <NuxtLink to="/"><img class="logo" :src="logo"></NuxtLink>
        <div class="information_links">
          <a class="link">Реализованные проекты</a>
          <NuxtLink to='/news' class="link" active-class="active_link">Новости</NuxtLink>
          <NuxtLink to='/about' class="link" active-class="active_link">Контакты</NuxtLink>
        </div>
        <ToolbarRoot>
          <ToolbarButton class="burger_menu" v-on:click="showDialog">
            <img :src="menu">
          </ToolbarButton>
        </ToolbarRoot>

      </div>
      <div class="connection">
        <div class="telephone">
          <img :src="telephone" alt="">
          <a href="tel">+7 (900) 900-90-90</a>
        </div>
        <ToolbarRoot>
          <ToolbarButton class="button_default" v-on:click="showWindow">Оставить заявку</ToolbarButton>
        </ToolbarRoot>
      </div>
    </div>

    <div class="main_container">
      <NuxtPage/>
    </div>
    <div class="footer">
      <FooterView @visible="showWindow"></FooterView>
    </div>
  </div>

</template>

<script>
import {ToolbarButton, ToolbarRoot} from 'radix-vue'
import {defineComponent} from "vue";
import DialogView from "/src/components/DialogView.vue";
import logo from './src/assets/images/logo.png';
import WindowView from "./src/components/WindowView.vue";
import logo_white from './src/assets/images/logo_white.png';
import email from './src/assets/images/email.svg';
import location from './src/assets/images/location.svg';
import telephone from './src/assets/images/telephone.svg'
import menu from './src/assets/images/menu.svg'
import SliderView from "/src/components/SliderView.vue";
import AboutUsView from "/src/components/AboutUsView.vue";
import ProjectsView from "/src/components/ProjectsView.vue";
import NewsView from "./src/components/NewsView.vue";
import FooterView from "/src/components/FooterView.vue";

export default defineComponent({
  components: {
    ToolbarButton,
    ToolbarRoot,
    FooterView,
    SliderView,
    DialogView,
    AboutUsView,
    ProjectsView,
    WindowView,
    NewsView
  },
  data() {
    return {
      logo,
      logo_white,
      telephone,
      menu,
      location,
      email,
      isVisible: false,
      isVisibleWindow: false
    }
  },
  methods: {
    showDialog() {
      this.isVisible = !this.isVisible
    },
    showWindow() {
      this.isVisibleWindow = !this.isVisibleWindow
    }
  },
  mounted() {

  }
})

</script>

<style scoped lang="sass">

@mixin responsive_layout($width)
  @media screen and (max-width: $width)
    display: none

$shadow: 1px 1px 6px black

%sample_container
  display: flex
  flex-direction: column

a
  cursor: pointer

.main_container
  flex-grow: 1


.container
  @extend %sample_container
  width: 100%
  height: 100%

  .header
    background: #ffffff
    display: flex
    flex-shrink: 0
    height: 97px
    justify-content: space-around
    font-family: 'Open Sans'
    color: #666666
    font-size: 16px

.information
  display: flex
  align-items: center
  justify-content: space-evenly
  column-gap: 30px
  @media screen and (max-width: 1080px)
    width: 100%
    justify-content: space-between
    padding-left: 30px
    padding-right: 30px

.information_links
  display: flex
  column-gap: 24px
  @include responsive_layout(1080px)

.burger_menu
  background: #029F59
  color: white
  border-radius: 10px
  border: 2px #029F59 solid
  padding: 10px
  transition: all 1s

  &:hover
    background: #254741
    border: 2px #029F59 solid

  @media screen and (min-width: 1081px)
    display: none

.connection
  display: flex
  align-items: center
  column-gap: 24px
  @include responsive_layout(1080px)

.telephone, .email
  display: flex
  column-gap: 8px
  align-items: center
  @media screen and (max-width: 1300px)
    padding-right: 60px

.location
  display: flex
  column-gap: 8px
  align-items: flex-start

.telephone a
  text-decoration: none
  color: #254741

.footer
  font-family: 'Open Sans'
  background: #254741
  padding: 37px 88px 0
  font-size: 14px
  flex-shrink: 0
  color: white
  @media screen and (max-width: 740px)
    padding: 37px 40px 0

@mixin navigation_responsive_layout($width, $padding-right, $column-gap: 122px, $flex-direction: row, $row-gap: 0)
  @media screen and (max-width: $width)
    padding-right: $padding-right
    column-gap: $column-gap
    flex-direction: $flex-direction
    row-gap: $row-gap

.button_default
  padding: 16px 40px
  background: #029F59
  color: white
  border-radius: 10px
  border: 2px #029F59 solid
  transition: all 1s
  width: 204px

  &:hover
    background: #254741
    border: 2px #029F59 solid

.link
  color: #666666
  transition: all 1s

.active_link
  color: #029F59

.link:hover
  color: #254741


</style>
