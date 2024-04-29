<template>
  <div class="projects_container">
    <h1>Реализованные проекты</h1>
    <div class="projects">
      <ProjectView
          v-for="project in projects"
          :title="project.title"
          :description="project.description"
          :image="project.images_project">
      </ProjectView>
    </div>
  </div>
</template>

<script>
import picture_1_1x from '../assets/images/projects_pictures/project_house_1.jpg'
import picture_1_2x from '../assets/images/projects_pictures/project_house_1@2.jpg'
import picture_2_1x from '../assets/images/projects_pictures/project_house_2.jpg'
import picture_2_2x from '../assets/images/projects_pictures/project_house_2@2.jpg'
import ProjectView from "/src/components/ProjectView.vue";

export default {
  name: "ProjectsView",
  components: {
    picture_1_1x, picture_1_2x, picture_2_1x, picture_2_2x,
    ProjectView
  },
  data() {
    return {
      projects: [
        {
          images_project: {
            x1: picture_1_1x,
            x2: picture_1_2x
          },
          title: 'Дом в скандинавском стиле',
          description: `Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей<br><br>Построен по индивидуальному проекту.`
        },
        {
          images_project: {
            x1: picture_2_1x,
            x2: picture_2_2x
          },
          title: 'Дом из газобетона',
          description: 'Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв.<br><br>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.'
        },
        {
          images_project: {
            x1: picture_1_1x,
            x2: picture_1_2x
          },
          title: 'Дом в скандинавском стиле',
          description: `Одноэтажный дом из газобетона габаритными размерами 10.73 х 10.73 м. и жилой площадью 101 кв. м. с вальмовой кровлей<br><br>Построен по индивидуальному проекту.`
        },
        {
          images_project: {
            x1: picture_2_1x,
            x2: picture_2_2x
          },
          title: 'Дом из газобетона',
          description: 'Одноэтажный дом габаритными размерами 15.2 х 9.7м. Приведенная площадь – 127.7 м.кв.<br><br>Три спальные комнаты, два сан.узла, большая кухня-гостиная с выходом на террасу.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
h1
  font-size: 38px
.projects_container
  font-family: 'Open Sans'

.projects
  padding-top: 32px
  padding-bottom: 80px
  display: flex
  flex-wrap: nowrap
  overflow: auto
  flex-flow: row
  scrollbar-color: #F5F7F3 #F5F7F3
  column-gap: 16px
  width: 100%

</style>