<template>
  <div id="wrapper">
    <h1>HELLO WORLD!!!</h1>
  </div>
</template>
<script>
console.log("Hello World")
</script>
<style scoped lang="sass">
#wrapper
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  height: 100%
  position: absolute
  h1
    color: #ffb6dd
    font-size: 3em
    text-shadow: 1px 1px black
  h1::first-letter
    color: #e672af


</style>
