<template>
  <div class="container">
    <div class="header">
      <div class="information">
        <img class="logo" src="public/images/logo.png">
        <div class="information_links">
          <a>Реализованные проекты</a>
          <a>Новости</a>
          <a>Контакты</a>
        </div>
      </div>
      <div class="connection">
        <div class="telephone">
          <img src="public/images/telephone.svg">
          <a href=»tel>+7 (900) 900-90-90</a>
        </div>
        <button>Оставить заявку</button>
      </div>
    </div>
    <div class="main_container">
      <h3>Hello World!!!</h3>
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
              <a href=»tel>+7 (900) 900-90-90</a>
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
        <button>Оставить заявку</button>
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
import {ToolbarButton} from 'radix-vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: {ToolbarButton}
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
    column-gap: 254px

    @media screen and (max-width: 1300px)
      column-gap: 20px

    .information
      display: flex
      align-items: center
      justify-content: space-between
      column-gap: 80px

    .information_links
      display: flex
      column-gap: 24px



    .connection
      display: flex
      align-items: center
      column-gap: 24px

.telephone, .email
  display: flex
  column-gap: 8px
  align-items: center

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
  height: 246px
  font-size: 14px
  flex-shrink: 0
  row-gap: 32px

.footer_top
  display: flex
  justify-content: space-evenly
  align-items: flex-start
  padding-top: 37px

.footer_bottom
  display: flex
  color: white
  opacity: 60%
  padding-left: 170px
  column-gap: 100px
  @media screen and (max-width: 1300px)
    padding-left: 60px


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
  width: 202px

.navigation
  display: flex
  column-gap: 122px
  padding-right: 320px
  padding-top: 12px
  @media screen and (max-width: 1300px)
    padding-right: 60px

button
  padding: 16px 40px
  background: #029F59
  color: white
  border-radius: 10px
  border: 2px #029F59 solid
  transition: all 1.5s
  width: 204px

  &:hover
    background: #254741
    border: 2px #029F59 solid
</style>
