<template>
  <div class="links">
    <NuxtLink to="/" class="link" active-class="active_link">Главная</NuxtLink>
    /
    <span class="active_link">{{ active_link }}</span>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    active_link: String
  }
}
</script>

<style scoped lang="sass">
.link
  color: #666666
  transition: all 1s
.links
  font-family: 'Open Sans'
  color: #666666
  padding-left: 30px
  font-size: 20px
.link:hover
  color: #254741
.active_link
  color: #029F59
  cursor: pointer
</style>