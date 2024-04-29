<template>
  <div class="about_us_container">
    <div class="information">
      <h1>Каждый проект для нас — важный</h1><br>
      <p>Мы строительная компания полного цикла.<br><br>
        Вникаем во все детали, разрабатываем планировку будущего дома, продумываем конструктивные решения и общую
        архитектурную концепцию</p>
    </div>
    <div class="cards">
      <figure v-for="card in cards" class="card">
        <img :src="card.img">
        <figcaption class="card_title">
          <h2>{{ card.title }}</h2>
          <p class="card_body">{{ card.body }}</p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import house from '../assets/images/house.svg'
import calendar from '../assets/images/calendar.svg'

export default {
  name: "AboutUsView",
  components: {
    house, calendar
  },
  data() {
    return {
      cards: [
        {
          title: '57 домов',
          body: 'спроектировали и построили “под ключ”',
          img: house
        },
        {
          title: '14 лет',
          body: 'мы на рынке загородного строительства',
          img: calendar
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
img
  width: 24px
  height: 24px

.about_us_container
  display: grid
  grid-template-columns: 2fr 1fr
  column-gap: 20px
  grid-template-rows: auto auto

.card
  background: #F5F7F3
  padding: 24px
  border-radius: 20px
  display: flex
  flex-direction: column
  row-gap: 24px
.cards
  display: flex
  column-gap: 16px
p
  color: #666666
  font-family: Montserrat
  font-size: 20px

.information
  font-family: 'Open Sans'

h2
  font-size: 24px

h1
  font-size: 38px

.card_title
  display: flex
  flex-direction: column
  row-gap: 8px

@media screen and (max-width: 1285px)
  .cards
    flex-direction: column
    row-gap: 12px
  .about_us_container
    grid-template-columns: 3fr 1fr

@media screen and (max-width: 660px)
  .about_us_container
    grid-template-columns: auto
    row-gap: 33px
</style>