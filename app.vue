<template>
  <div class="container">
    <div class="header">

      <p>My favorite characters</p>
    </div>
    <div class="main_container">
      <div class="about_me_container">
        <div class="card">
          <h3>Naruto Uzumaki</h3>
          <p>"Naruto"</p>
          <img src="public/images/naruto.jpg">
        </div>
        <div class="card">
          <h3>Levi Ackerman</h3>
          <p>"Attack on Titan"</p>
          <img src="public/images/levi.jpg">
        </div>
        <div class="card">
          <h3>Satoru Gojo</h3>
          <p>"Jujutsu Kaisen"</p>
          <img src="public/images/satoru.jpg">
        </div>
        <div class="card">
          <h3>Giyu Tomioka</h3>
          <p>"Kimetsu no Yaiba"</p>
          <img src="public/images/tomioka.jpg">
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>Telegram: gulykka</h2>
      <p>FEFU Bulygina Ulyana</p>
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

%font_information
  font:
    family: Montserrat
    size: 3em
  text-align: center
  color: white
  text-shadow: $shadow

.container
  @extend %sample_container

  .main_container
    @extend %sample_container, %font_information
    margin: 10px
    background: #e15ea4
    padding: 10px

    .about_me_container
      @extend %sample_container
      margin-top: 20px
      flex-direction: row
      justify-content: space-evenly
      flex-wrap: wrap

    .card
      padding: 10px
      margin-bottom: 50px
      width: 500px
      height: 500px
      font-size: 40px
      transition: 1s

      &:hover
        box-shadow: $shadow
        transition: 1s

      p
        font-size: 30px

      img
        margin-top: 10px
        width: 380px
        height: 380px
        border: white 4px solid


  @media (min-width: 1200px)
    .main_container
      margin: 20px 300px 20px 300px

  .footer
    @extend %for_header_footer
    font-size: 10px
    bottom: 0
    left: 0
    right: 0

  .header
    @extend %for_header_footer, %sample_container

  %for_header_footer
    background: #fb7fc2
    padding: 40px
    text-align: center

  %headers
    color: #ffb6dd
    font-size: 3em
    text-shadow: $shadow
    font-family: 'Open Sans'

  h2, h1, p
    @extend %headers

</style>
