<template>
  <div class="container">
    <div class="header">
      <div class="information">
        <img class="logo" src="public/images/logo.png">
        <div class="information_links">
          <a>Реализованные проекты</a>
          <a>Новости</a>
          <a>Контакты</a>
        </div>
      </div>
      <div class="connection">
        <div class="telephone">
          <img src="public/images/telephone.svg">
          <a href=»tel>+7 (900) 900-90-90</a>
          </div>
        <button>Оставить заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
console.log("Hello World")
</script>

<style scoped lang="sass">

$shadow: 1px 1px 6px black

%sample_container
  display: flex
  flex-direction: column

.container
  @extend %sample_container

  //.footer
  //  font-size: 10px
  //  bottom: 0
  //  left: 0
  //  right: 0

  .header
    background: #ffffff
    display: flex
    height: 97px
    justify-content: space-around
    font-family: 'Open Sans'
    color: #666666
    font-size: 16px
    column-gap: 254px

    @media screen and (max-width: 1300px)
        column-gap: 20px

    .information
      display: flex
      align-items: center
      justify-content: space-between
      column-gap: 80px

    .information_links
      display: flex
      column-gap: 24px

      a
        cursor: pointer

    .connection
      display: flex
      align-items: center
      column-gap: 24px

      .telephone
        display: flex
        column-gap: 8px
      a
        text-decoration: none
        color: #254741

button
  padding: 16px 40px
  background: #029F59
  color: white
  border-radius: 10px
  border: 2px #029F59 solid
  transition: all 1.5s
  width: 204px

  &:hover
    background: #254741
    border: 2px #029F59 solid
</style>
