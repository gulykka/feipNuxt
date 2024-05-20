<template>
    <div class="news_container">
      <div class="links">
          <NuxtLink to="/" class="link" active-class="active_link">Главная</NuxtLink>
         /
          <NuxtLink to="/news" class="link" active-class="active_link">Новости</NuxtLink>
      </div>
      <div class="news_container_1">

        <h1 class="title">Новости</h1>
        <div class="news">
          <PieceNewsView
              class="item_news"
              v-for="piece_news in news"
              :image="piece_news.images"
              :date="piece_news.date"
              :title="piece_news.title"
              :body="piece_news.body">
          </PieceNewsView>
        </div>
      </div>
      <PaginationView class="pagination"></PaginationView>
</div>
</template>

<script>
import PieceNewsView from "/src/components/PieceNewsView.vue";
import news_1_x1 from '/src/assets/images/news_pictures/news_picture_1.jpg'
import news_1_x2 from '/src/assets/images/news_pictures/news_picture_1@2.jpg'
import news_2_x1 from '/src/assets/images/news_pictures/news_picture_2.jpg'
import news_2_x2 from '/src/assets/images/news_pictures/news_picture_2@2.jpg'
import news_3_x1 from '/src/assets/images/news_pictures/news_picture_3.jpg'
import news_3_x2 from '/src/assets/images/news_pictures/news_picture_3@2.jpg'
import news_4_x1 from '/src/assets/images/news_pictures/news_picture_4.jpg'
import news_4_x2 from '/src/assets/images/news_pictures/news_picture_4@2.jpg'
import PaginationView from "/src/components/PaginationView.vue"


export default {
  name: "news",
  computed: {
    news() {
      return news
    }
  },
  components: {
    PaginationView,
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
        },
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
        },
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
        },
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
        },
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
        },
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

      ]
    }
  }
}
</script>

<style scoped lang="sass">
.news
  display: flex
  flex-wrap: wrap
  gap: 16px
  justify-content: space-around

.link
  color: #666666

.links
  color: #666666
  padding-left: 30px
  font-size: 20px
.title
  padding-left: 30px



.news_container
  padding: 80px 60px 80px 60px
  font-family: 'Open Sans'
  row-gap: 48px
  display: flex
  flex-direction: column

.news_container_1
  display: flex
  flex-direction: column
  row-gap: 32px
.link:hover
  color: #254741
.pagination
  align-self: center
.active_link
  color: #029F59
</style>