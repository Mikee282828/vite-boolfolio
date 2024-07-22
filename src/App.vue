<script>
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    ProjectCard,
    AppHeader,
  },
  methods: {
    urlButton(url) {
      if (url != null) {
        axios.get(url).then(result => {
          this.projects = result.data.projects
        })
      }
    }
  },
}
</script>

<template>
  <AppHeader />
  <RouterView></RouterView>
</template>

<style scoped>
</style>
