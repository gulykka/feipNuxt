<template>
  <div class="news_container">
    <div class="news_navigation">
      <h1>Новости</h1>
      <GreenBorderButton>Все новости</GreenBorderButton>
    </div>
    <div class="news">
      <PieceNewsView
          v-for="piece_news in news"
          :image="piece_news.images"
          :date="piece_news.date"
          :title="piece_news.title"
          :body="piece_news.body">
      </PieceNewsView>
    </div>
  </div>
</template>

<script>
import news_1_x1 from '../assets/images/news_pictures/news_picture_1.jpg'
import news_1_x2 from '../assets/images/news_pictures/news_picture_1@2.jpg'
import news_2_x1 from '../assets/images/news_pictures/news_picture_2.jpg'
import news_2_x2 from '../assets/images/news_pictures/news_picture_2@2.jpg'
import news_3_x1 from '../assets/images/news_pictures/news_picture_3.jpg'
import news_3_x2 from '../assets/images/news_pictures/news_picture_3@2.jpg'
import news_4_x1 from '../assets/images/news_pictures/news_picture_4.jpg'
import news_4_x2 from '../assets/images/news_pictures/news_picture_4@2.jpg'
import PieceNewsView from './PieceNewsView.vue';
import GreenBorderButton from './GreenBorderButton.vue'
export default {
  name: "NewsView",
  components: {
    GreenBorderButton,
    PieceNewsView,
    news_4_x2, news_4_x1, news_3_x2, news_3_x1,
    news_2_x2, news_2_x1, news_1_x2, news_1_x1
  },
  data() {
    return {
      news: [
        {
          images: {
            x1: news_1_x1,
            x2: news_1_x2
          },
          date: '20 авг 2021',
          title: 'Как сделать строительство дешевле?',
          body: 'Строительство дома можно сделать дешевле — выбрав проект...'
        },
        {
          images: {
            x1: news_2_x1,
            x2: news_2_x2
          },
          date: '20 авг 2021',
          title: 'Почему Гуд Вилл строит лучшие дома?',
          body: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
        },
        {
          images: {
            x1: news_3_x1,
            x2: news_3_x2
          },
          date: '20 авг 2021',
          title: 'Преимущества и недостатки частного дома',
          body: 'Первое и главное: строим дом индивидуально для вас, по вашим...'
        },
        {
          images: {
            x1: news_4_x1,
            x2: news_4_x2
          },
          date: '20 авг 2021',
          title: 'Из чего мы строим дома в ипотеку?',
          body: 'Самый популярный вопрос наших клиентов касается материалов, которы...'
        },
        {
          images: {
            x1: news_2_x1,
            x2: news_2_x2
          },
          date: '20 авг 2021',
          title: 'Почему Гуд Вилл строит лучшие дома?',
          body: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
        },
        {
          images: {
            x1: news_3_x1,
            x2: news_3_x2
          },
          date: '20 авг 2021',
          title: 'Преимущества и недостатки частного дома',
          body: 'Первое и главное: строим дом индивидуально для вас, по вашим...'
        },
        {
          images: {
            x1: news_4_x1,
            x2: news_4_x2
          },
          date: '20 авг 2021',
          title: 'Из чего мы строим дома в ипотеку?',
          body: 'Самый популярный вопрос наших клиентов касается материалов, которы...'
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
h1
  font-size: 38px
.news_container
  font-family: 'Open Sans'
  display: flex
  flex-direction: column
  row-gap: 32px


.news
  display: flex
  column-gap: 16px
  flex-wrap: nowrap
  overflow: auto
  scrollbar-color: white white
  flex-flow: row
  padding-bottom: 20px

.news_navigation
  display: flex
  justify-content: space-between


</style>