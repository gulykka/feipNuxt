<template>
  <div
      class="window"
      @click="$emit('visible')">
  </div>
  <div class="dialog">
    <div class="menu_up">
      <ToolbarRoot>
        <ToolbarButton
            class="close_button"
            @click="$emit('visible')">
          <img src="public/images/close_button.svg">
        </ToolbarButton>
      </ToolbarRoot>
      <div class="information_links">
        <a>Реализованные проекты</a>
        <a>Новости</a>
        <a>Контакты</a>
      </div>
    </div>
    <div class="connection">
      <div class="telephone">
        <img src="public/images/telephone_white.svg">
        <a href="tel">+7 (900) 900-90-90</a>
      </div>
      <div class="email">
        <img src="public/images/email_white.svg">
        <a href="mailto:info@gmail.com">info@gmail.com</a>
      </div>
      <div class="location">
        <img src="public/images/location_white.svg">
        <a>г. Владивосток ул. Выселковая 49, стр. 3</a>
      </div>
    </div>
  </div>
</template>

<script>
import {ToolbarButton, ToolbarRoot} from 'radix-vue'

export default {
  name: "DialogView",
  components: {
    ToolbarButton, ToolbarRoot
  },
  data() {
    return {
      isVisible: true
    }
  }
}
</script>

<style scoped lang="sass">
.window

  opacity: 0.5
  background: black
  width: 100%
  left: 0
  top: 0
  bottom: 0
  //height: 100vh
  position: fixed

a
  color: white
.dialog
  width: 40%
  position: fixed
  right: 0
  bottom: 0
  top: 0
  display: flex
  flex-direction: column
  justify-content: space-between
  background: #029F59
  padding: 20px

.close_button
  padding: 5px
  width: 32px
  background: #4bb586
  height: 32px
  border: none
  border-radius: 5px
  transition: all 1s
  &:hover
    opacity: 0.8

.information_links
  display: flex
  flex-direction: column
  color: white
  row-gap: 24px

.menu_up
  display: flex
  flex-direction: column
  row-gap: 20px



.connection
  display: flex
  flex-direction: column
  row-gap: 24px


.telephone, .email
  display: flex
  column-gap: 8px
  align-items: center

.location
  display: flex
  column-gap: 8px
  align-items: flex-start

</style>