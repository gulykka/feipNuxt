<template>
  <div class='piece_news'>
    <picture>
      <source :srcset='`${image.x2} 2x, ${image.x1}`'>
      <img :src='image.x1' :alt='title' class='image'/>
    </picture>
    <div class="piece_news_information">
      <p>{{date}}</p>
      <div class="piece_news_information_description">
        <h4>{{ title }}</h4>
        <p>{{body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PieceNewsView",
  props: {
    image: {
      x1: String,
      x2: String
    },
    date: String,
    title: String,
    body: String
  }
}
</script>

<style scoped lang="sass">
.piece_news
  display: flex
  flex-direction: column
  width: 300px
  row-gap: 16px
  min-width: 300px
img
  border-radius: 20px 20px 0 0
  width: 100%
p
  font-family: 'Open Sans'
  color: #666666
h4
  font-family: Montserrat

.piece_news_information
  display: flex
  flex-direction: column
  row-gap: 16px
.piece_news_information_description
  display: flex
  flex-direction: column
  row-gap: 8px
</style>