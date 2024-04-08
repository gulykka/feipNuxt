<template>
  <div
      :class="{hidden_window: isHidden, window: !isHidden}"
      @click="hiddenMenu">
  </div>
  <div :class="{hidden_dialog: isHidden, dialog: !isHidden}">
    <div class="menu_up">
      <ToolbarRoot class="close_button">
        <ToolbarButton
            class="close_button"
            @click="hiddenMenu">
          <img :src="close_button">
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
        <img :src="telephone_white">
        <a href="tel">+7 (900) 900-90-90</a>
      </div>
      <div class="email">
        <img :src='email_white'>
        <a href="mailto:info@gmail.com">info@gmail.com</a>
      </div>
      <div class="location">
        <img :src="location_white">
        <a>г. Владивосток ул. Выселковая 49, стр. 3</a>
      </div>
    </div>
  </div>
</template>

<script>
import {ToolbarButton, ToolbarRoot} from 'radix-vue'
import email_white from '../assets/images/email_white.svg'
import close_button from '../assets/images/close_button.svg'
import location_white from '../assets/images/location_white.svg'
import telephone_white from '../assets/images/telephone_white.svg'

export default {
  name: "DialogView",
  components: {
    ToolbarButton, ToolbarRoot
  },
  data() {
    return {
      email_white,
      telephone_white,
      location_white,
      close_button,
      isVisible: true,
      isHidden: false,
    }
  },
  methods: {
    hiddenMenu() {
      this.isHidden = true
      setTimeout(() => this.$emit('visible'), 1000)

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
  position: fixed
  animation-name: dark
  animation-duration: 1s

.hidden_window
  animation-duration: 1s
  background: black
  width: 100%
  left: 0
  top: 0
  bottom: 0
  position: fixed
  animation-name: dark_hidden


@keyframes dark
  from
    opacity: 0
  to
    opacity: 0.5
@keyframes dark_hidden
  from
    opacity: 0.5
  to
    opacity: 0
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
  animation-name: show_dialog
  animation-duration: 1s

.close_button
  padding: 5px
  background: #4bb586
  width: 32px
  height: 32px
  border: none
  border-radius: 5px
  transition: all 1s
  align-self: flex-end
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

@keyframes show_dialog
  from
    transform: translateX(100%)
  to
    transform: translateX(0)

@keyframes hidden_dial
  from
    transform: translateX(0)
  to
    transform: translateX(100%)

.hidden_dialog
  animation-name: hidden_dial
  animation-duration: 1s
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

</style>