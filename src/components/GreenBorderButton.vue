<template>
<button>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "GreenBorderButton"
}
</script>

<style scoped lang="sass">
button
  border: 1px #029F59 solid
  padding: 16px 24px 16px 24px
  border-radius: 10px
  background: none
  color: #029F59
  font-weight: 600
  font-size: 14px
  font-family: Montserrat
</style>