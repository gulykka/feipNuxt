<template>
  <div
      :class="{hidden_view: windowIsHidden, view: !windowIsHidden}"
      v-on:click="hiddenWindow"
  >
  </div>
  <div
      :class="{hidden_dialog: windowIsHidden, dialog: !windowIsHidden}"
  >
    <GreenOpacityButton
        class="close_button"
        v-on:click="hiddenWindow">
      <img :src="close_button">
    </GreenOpacityButton>

  </div>
</template>

<script>
import GreenOpacityButton from "/src/components/GreenOpacityButton.vue";
import close_button from "/src/assets/images/close_button_1.svg"
export default {
  name: "WindowView",
  components: {
    GreenOpacityButton
  },
  data() {
    return {
      close_button,
      windowIsHidden: false,
      windowIsVisible: true
    }
  },
  methods: {
    hiddenWindow() {
      this.$emit('visible')
    }
  }
}
</script>

<style scoped lang="sass">
.view
  position: fixed
  top: 0
  right: 0
  left: 0
  bottom: 0
  background: rgba(0, 0, 0, 0.5)
  z-index: 2
.dialog
  width: 448px
  height: 603px
  background: #F5F7F3
  border-radius: 10px
  position: fixed
  top: 20%
  left: 35%
  z-index: 3
  @media screen and (max-width: 1270px)
    left: 30%
  @media screen and (max-width: 1000px)
    left: 25%
.close_button
  position: absolute
  right: 20px
  top: 20px
</style>