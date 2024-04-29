<template>
  <div class='project'>
    <picture>
      <source :srcset='`${image.x2} 2x, ${image.x1}`'>
      <img :src='image.x1' :alt='title' class='image'/>
    </picture>
    <div class="project_information">
      <h4>{{ title }}</h4>
      <p v-html='description'/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  props: {
    image: {
      x1: String,
      x2: String
    },
    title: String,
    description: String
  }
}
</script>

<style scoped lang="sass">
.project
  display: flex
  flex-direction: row-reverse
  background: white
  border-radius: 20px
  min-width: 624px

h4
  font-family: 'Open Sans'
  font-size: 20px

p
  font-family: Montserrat
  color: #666666
  font-size: 16px
.project_information
  padding: 32px
  display: flex
  flex-direction: column
  row-gap: 12px
img
  border-radius: 0 20px 20px 0
  height: 100%

@media screen and (max-width: 1080px)
  .project
    flex-direction: column
    min-width: 350px
  img
    border-radius: 20px 20px 0 0
    width: 100%
</style>