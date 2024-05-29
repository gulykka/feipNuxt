<template>
  <div class="form">
    <h2 class="title">Оставить заявку</h2>
    <form>
      <div class="form_example">
        <input placeholder="Имя">
        <input placeholder="Телефон" type="tel">
        <textarea placeholder="Сообщение"></textarea>
      </div>
    </form>
    <ButtonGreen class="form_button">Оставить заявку</ButtonGreen>
    <div class="other_information">
      <p>Нажимая на кнопку «Отправить», вы принимаете <a>пользовательское соглашение</a>
        и <a>политику конфиденциальности</a></p>
    </div>
  </div>
</template>

<script>
import ButtonGreen from "/src/components/ButtonGreen.vue";
export default {
  name: "FormView",
  components: {
    ButtonGreen
  }
}
</script>

<style scoped lang="sass">
.form
  padding-top: 48px
  row-gap: 24px
  display: flex
  flex-direction: column
  //justify-content: center
.title
  padding-left: 35px
  font-family: Montserrat
  font-size: 32px
  font-weight: 700

input, textarea
  border-radius: 5px
  border: none
  padding: 16px
  font-size: 14px
  font-family: Montserrat
  width: 350px
  max-height: 130px
  max-width: 350px
  font-weight: 400
textarea
  min-width: 350px
.form_example
  display: flex
  flex-direction: column
  align-items: center
  row-gap: 24px
.form_button
  padding: 16px 40px 16px 40px
  width: 204px
  align-self: center
.other_information
  font-family: 'Open Sans'
  color: rgba(83, 83, 83, 0.79)
  text-align: center
  max-width: 350px
  align-self: center
a
  color: #029F59
</style>