<template>
  <BreadCrumbs :active_link="title_page"></BreadCrumbs>
  <div class="container">
    <div class="contacts_container">
      <h1 class="title">{{ title_page }}</h1>
      <ContactsView :is_page="true"></ContactsView>
    </div>
    <div class="map">
      <MapView width="100%"></MapView>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "/src/components/BreadCrumbs.vue";
import ContactsView from "/src/components/ContactsView.vue";
import MapView from "/src/components/MapView.vue";

export default {
  name: "about",
  components: {
    BreadCrumbs, ContactsView, MapView
  },
  data() {
    return {
      title_page: 'Контакты',

    }
  }
}
</script>

<style scoped lang="sass">
.contacts_container
  display: flex
  flex-direction: column
  row-gap: 48px

.title
  font-family: 'Open Sans'
  font-size: 46px
  font-weight: 700

.info_container
  display: flex
  flex-direction: column
  row-gap: 32px

.container
  padding-top: 48px
  display: flex
  justify-content: center
  column-gap: 100px

@media screen and (max-width: 1080px)
  .container
    flex-direction: column
    align-items: center
    row-gap: 32px
.map
  width: 500px
@media screen and (max-width: 1080px)
  .map
    max-width: 500px
    width: 100%
</style>