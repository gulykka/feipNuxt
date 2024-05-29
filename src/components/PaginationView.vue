<template>
  <PaginationRoot :total="100" :sibling-count="1" show-edges :default-page="1" :itemsPerPage="10">
    <PaginationList v-slot="{ items }" class="list">
      <PaginationPrev class="button_prev Button">
        <img :src="arrow" alt="Назад" class="image">

      </PaginationPrev>
      <div class="items">
      <template v-for="(page, index) in items" >
        <PaginationListItem v-if="page.type === 'page'" :key="index" class="button_item" :value="page.value">
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis v-else :key="page.type" :index="index" class="button_ell">
          ...
        </PaginationEllipsis>
      </template>
      </div>
      <PaginationNext class="button_next Button">
        <img :src="arrow" alt="Дальше">
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<script>
import arrow from '/src/assets/images/arrow.svg'
export default {

  name: "PaginationView",
  data() {
    return {
      arrow
    }
  }
}
</script>

<style scoped lang="sass">
.items
  display: flex
  column-gap: 8px
.list
  display: flex
  column-gap: 24px
.button_item, .button_ell
  width: 48px
  height: 48px
  border-radius: 10px
  border: 1px #9D9C9C solid
  display: flex
  justify-content: center
  align-items: center
  background: white
  font-family: Montserrat
  font-size: 16px
  font-weight: 500
  color: #254741

.button_item[data-selected]
  background: #254741
  border: none
  color: white

.Button
  background: #029F59
  border-radius: 10px
  width: 48px
  height: 48px
  border: none
.Button:disabled
  background: black
  border: 1px white solid
  filter: invert(100%)
  opacity: 0.2

.button_prev
  rotate: 180deg

</style>