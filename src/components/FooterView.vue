<template>
  <div class="footer">
    <div class="footer_top">
      <img :src="logo_white" class="logo">
      <div class="navigation">
        <a style="grid-area: project">Реализованные проекты</a>
        <NuxtLink to='/news' class="link" style="grid-area: news">Новости</NuxtLink>
        <NuxtLink to="/contacts" class="link" style="grid-area: contacts">Контакты</NuxtLink>
        <ContactsView style="grid-area: contacts_view"></ContactsView>
      </div>
      <ButtonGreen class="add" v-on:click="hiddenWindow">Оставить заявку</ButtonGreen>
    </div>
    <div class="footer_bottom">
      <label style="grid-area: b1">© Загдом, 2021</label>
      <a style="grid-area: b2">Политика конфиденциальности</a>
      <a style="grid-area: b3">Пользовательское соглашение</a>
    </div>
  </div>
</template>

<script>
import ButtonGreen from "/src/components/ButtonGreen.vue";
import logo_white from '/src/assets/images/logo_white.png';
import email from '/src/assets/images/email.svg';
import location from '/src/assets/images/location.svg';
import telephone from '/src/assets/images/telephone.svg'
import GreenBorderButton from "/src/components/GreenBorderButton.vue";
import ContactsView from "/src/components/ContactsView.vue";

export default {
  name: "FooterView",
  components: {
    GreenBorderButton,
    ButtonGreen,
    ContactsView
  },
  data() {
    return {
      logo_white, email, location, telephone
    }
  },
  methods: {
    hiddenWindow() {
      this.$emit('visible')
    }
  }
}
</script>

<style scoped lang="sass">

.telephone, .email
  display: flex
  column-gap: 8px
  align-items: center


.location
  display: flex
  column-gap: 8px
  align-items: flex-start

.telephone a, .email a
  text-decoration: none
  color: white

.footer
  display: grid
  height: 246px
  grid-template-rows: 3fr 1fr
  grid-template-columns: 1fr
  grid-row-gap: 30px
  grid-template-areas: 'footer_top' 'footer_bottom'
  @media screen and (max-width: 1140px)
    height: 340px
  @media screen and (max-width: 930px)
    height: 670px
    grid-row-gap: 10px
    grid-template-columns: 90px 2fr
    grid-template-areas: '. footer_top' '. footer_bottom'
  @media screen and (max-width: 600px)
    grid-template-columns: 30px 1fr
    grid-template-areas: '. footer_top' '. footer_bottom'

.footer_bottom
  grid-area: footer_bottom

.footer_top
  grid-area: footer_top
  display: grid
  grid-template-columns: 1fr 2fr 1fr
  grid-template-rows: 1fr
  grid-column-gap: 20px
  grid-template-areas: 'logo navigation add_'
  @media screen and (max-width: 930px)
    grid-template-columns: 1fr
    grid-template-rows: 1fr 3fr 1fr
    grid-template-areas: 'logo' 'navigation' 'add_'
    grid-row-gap: 20px

.logo
  grid-area: logo

.add
  grid-area: add_
  width: 204px
  height: 49px

.telephone
  grid-area: telephone

.location
  grid-area: location

.email
  grid-area: email

.navigation
  grid-area: navigation
  display: grid
  height: 105px
  grid-template-rows: 1fr 1fr 1fr
  grid-template-columns: 1fr 30px 1fr
  grid-template-areas: 'project . contacts_view' 'news . contacts_view' 'contacts . contacts_view'
  @media screen and (max-width: 1140px)
    grid-template-columns: 1fr
    grid-template-rows: repeat(6, 1fr)
    grid-row-gap: 20px
    grid-template-areas: 'project' 'news' 'contacts' 'contacts_view'  'contacts_view' 'contacts_view'
    height: 250px

.footer_bottom
  color: rgba(197, 197, 197, 0.79)
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-template-rows: 1fr
  grid-template-areas: 'b1 b2 b3 .'
  grid-column-gap: 10px
  @media screen and (max-width: 1620px)
    grid-template-columns: 1fr 1fr 1fr
  @media screen and (max-width: 930px)
    grid-template-rows: 1fr 1fr 1fr
    grid-template-columns: 1fr
    grid-template-areas: 'b1' 'b2' 'b3'
    grid-row-gap: 0

.link
  color: white
</style>