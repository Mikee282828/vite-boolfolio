<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  data() {
    return {
      projects: '',
      baseUri: 'http://localhost:8000/api/projects'
    }
  },
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
  mounted() {
    axios
      .get(this.baseUri)
      .then(
        result => {
          this.projects = result.data.projects;
        }
      )
  }
}
</script>

<template>
  <AppHeader />
  <RouterView></RouterView>

  <!-- <div class="container">
    <nav>
      <ul class="pagination">
        <li class="page-item my_cursor-pointer" @click="urlButton(item.url)" v-for="item in projects.links"><a
            class="page-link" v-html="item.label"></a></li>
      </ul>
    </nav>

    <div class="row">
      <div class="col-4 my_height g-3" v-for="project in projects.data">
        <ProjectCard :project="project" />
      </div>
    </div>

  </div> -->
</template>

<style scoped>
.my_height {
  height: 20rem;
}

.my_cursor-pointer {
  cursor: pointer;
}
</style>
