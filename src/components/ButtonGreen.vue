<template>
<button>
  <slot></slot>
</button>
</template>

<script>

export default {
  name: "ButtonGreen"
}
</script>

<style scoped lang="sass">
button
  background: #029F59
  border-radius: 10px
  color: white
  font-size: 14px
  transition: all 1s
  border: 2px #029F59 solid
  &:hover
    background: #254741
    border: 2px #029F59 solid

</style>