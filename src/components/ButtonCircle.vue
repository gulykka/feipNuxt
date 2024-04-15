<template>
<button class="button_circle"></button>
</template>

<script>
export default {
  name: "ButtonCircle"
}
</script>

<style scoped lang="sass">
.button_circle
  height: 12px
  width: 12px
  border-radius: 20px
  border: none
  transition: all 1s
  &:disabled
    background: #03B766
  &:hover
    background: #24b372

</style>