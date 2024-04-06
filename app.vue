<template>
  <DialogView
      v-if="isVisible" @visible="showDialog"></DialogView>
  <div class="container">
    <div class="header">
      <div class="information">
        <img class="logo" src="public/images/logo.png">
        <div class="information_links">
          <a>Реализованные проекты</a>
          <a>Новости</a>
          <a>Контакты</a>
        </div>
        <ToolbarRoot>
          <ToolbarButton class="burger_menu" v-on:click="showDialog">
            <img src="public/images/menu.svg">
          </ToolbarButton>
        </ToolbarRoot>

      </div>
      <div class="connection">
        <div class="telephone">
          <img src="public/images/telephone.svg">
          <a href=»tel>+7 (900) 900-90-90</a>
        </div>
        <ToolbarRoot>
          <ToolbarButton class="button_default">Оставить заявку</ToolbarButton>
        </ToolbarRoot>
      </div>
    </div>
    <div class="main_container">
    </div>
    <div class="footer">
      <div class="footer_top">
        <img src="public/images/logo_white.png">
        <div class="navigation">
          <div class="information_links_footer">
            <a>Реализованные проекты</a>
            <a>Новости</a>
            <a>Контакты</a>
          </div>
          <div class="connection_footer">
            <div class="telephone">
              <img src="public/images/telephone.svg">
              <a href="tel">+7 (900) 900-90-90</a>
            </div>
            <div class="email">
              <img src="public/images/email.svg">
              <a href="mailto:info@gmail.com">info@gmail.com</a>
            </div>
            <div class="location">
              <img src="public/images/location.svg">
              <a>г. Владивосток ул. Выселковая 49, стр. 3</a>
            </div>
          </div>
        </div>
        <ToolbarRoot>
          <ToolbarButton class="button_default">Оставить заявку</ToolbarButton>
        </ToolbarRoot>
      </div>
      <div class="footer_bottom">
        <label>© Загдом, 2021</label>
        <a>Политика конфиденциальности</a>
        <a>Пользовательское соглашение</a>
      </div>
    </div>
  </div>

</template>

<script>
import {ToolbarButton, ToolbarRoot} from 'radix-vue'
import {defineComponent} from "vue";
import DialogView from "/public/components/DialogView.vue";

export default defineComponent({
  components: {
    ToolbarButton,
    ToolbarRoot,
    DialogView
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    showDialog() {
      this.isVisible = !this.isVisible
    }
  }
})

console.log("Hello World")
</script>

<style scoped lang="sass">

$shadow: 1px 1px 6px black

%sample_container
  display: flex
  flex-direction: column

a
  cursor: pointer

.main_container
  flex-grow: 1
  display: flex
  padding: 60px

.container
  @extend %sample_container
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
  @media screen and ( max-width: 1080px)
    width: 100%
    justify-content: space-between
    padding-left: 30px
    padding-right: 30px


.information_links
  display: flex
  column-gap: 24px
  @media screen and ( max-width: 1080px)
    display: none
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

  @media screen and ( min-width: 1081px)
    display: none

.connection
  display: flex
  align-items: center
  column-gap: 24px
  @media screen and ( max-width: 1080px)
    display: none

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
  display: flex
  flex-direction: column
  font-family: 'Open Sans'
  background: #254741
  padding-bottom: 20px
  font-size: 14px
  flex-shrink: 0
  row-gap: 32px
  @media screen and (max-width: 680px)
    align-items: center


.footer_top
  display: flex
  justify-content: space-evenly
  align-items: flex-start
  padding-top: 37px
  @media screen and (max-width: 680px)
    flex-direction: column
    row-gap: 20px

.footer_bottom
  display: flex
  color: #acacac
  padding-left: 200px
  column-gap: 100px
  @media screen and (max-width: 1080px)
    padding-left: 60px
  @media screen and (max-width: 940px)
    padding-left: 0
    justify-content: space-around
    column-gap: 0
  @media screen and (max-width: 680px)
    flex-direction: column
    row-gap: 20px
  a
    color: #acacac
  label
    padding-right: 140px
    @media screen and (max-width: 1300px)
      padding-right: 60px

.information_links_footer
  display: flex
  flex-direction: column
  color: white
  row-gap: 24px
  width: 195px


.connection_footer a
  text-decoration: none
  color: white


.connection_footer
  display: flex
  flex-direction: column
  row-gap: 24px
  width: 205px

.navigation
  display: flex
  column-gap: 122px
  padding-right: 320px
  padding-top: 12px
  @media screen and (max-width: 1300px)
    padding-right: 60px
  @media screen and (max-width: 1080px)
    column-gap: 20px
  @media screen and (max-width: 940px)
    flex-direction: column
    row-gap: 20px

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




</style>
