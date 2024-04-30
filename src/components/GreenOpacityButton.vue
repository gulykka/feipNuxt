<template>
<button>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "GreenOpacityButton"
}
</script>

<style scoped lang="sass">
button
  padding: 5px 7px
  background: rgba(2, 159, 89, 0.2)
  border: none
  border-radius: 6px
slot
  position: absolute
  top: 0
  left: 0
  right: 0
</style>