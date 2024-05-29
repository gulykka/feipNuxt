<template>
<WindowView>
<FormView></FormView>
</WindowView>

</template>

<script>
import WindowView from "/src/components/WindowView.vue";
import FormView from "/src/components/FormView.vue";
export default {
  name: "FormWindow",
  components: {
    WindowView,
    FormView
  }
}
</script>

<style scoped>

</style>