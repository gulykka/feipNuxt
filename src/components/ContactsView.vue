<template>
  <div class="contacts">
    <div :class="{ item: !is_page, _item: is_page}">
      <img :src="telephone" alt="" class="image">
      <a :href="`tel:${mockContacts.phone.value}`" :class="{phone: is_page}">{{ mockContacts.phone.label }}</a>
    </div>
    <div :class="{ item: !is_page, _item: is_page}">
      <img :src="email_im" class="image">
      <a :href="`mailto:${mockContacts.email}`">{{ mockContacts.email }}</a>
    </div>
    <div :class="{ item: !is_page, _item: is_page}">
      <img :src="location" class="image">
      <span>{{ mockContacts.address }}</span>
    </div>
  </div>
</template>

<script>
import email_im from '/src/assets/images/email.svg';
import location from '/src/assets/images/location.svg';
import telephone from '/src/assets/images/telephone.svg'
import {mockContacts} from "/src/mock/contacts.js";
export default {
  name: "ContactsView",
  props: {
    is_page: Boolean
  },
  data() {
    return {
      email_im, telephone, location,
      mockContacts
    }
  }
}
</script>

<style scoped lang="sass">
.contacts
  font-family: Montserrat
  display: flex
  row-gap: 24px
  flex-direction: column
.item
  display: flex
  column-gap: 8px
a
  color: white
._item
  color: black
  display: flex
  column-gap: 8px
  font-size: 20px
  a
    color: black
.phone
  font-weight: 900
.image
  align-self: flex-start
  width: 24px
  height: 24px

</style>