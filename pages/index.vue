<template>
  <div class="main_container">
    <div class="slider">
      <SliderView></SliderView>
    </div>
    <div class="about">
      <AboutUsView></AboutUsView>
    </div>
    <div class="projects">
      <ProjectsView></ProjectsView>
    </div>
    <div class="news">
      <NewsView></NewsView>
    </div>
  </div>
</template>

<script>
import SliderView from "/src/components/SliderView.vue";
import AboutUsView from "/src/components/AboutUsView.vue";
import ProjectsView from "/src/components/ProjectsView.vue";
import NewsView from "/src/components/NewsView.vue";

export default {
  name: "index",
  components: {NewsView, ProjectsView, AboutUsView, SliderView}
}
</script>

<style scoped lang="sass">
.slider, .about, .projects, .news
  padding-left: 60px
  padding-right: 60px

.projects
  background: #F5F7F3
  padding-top: 80px
.main_container
  padding-bottom: 60px
  display: flex
  flex-direction: column
  row-gap: 120px
</style>