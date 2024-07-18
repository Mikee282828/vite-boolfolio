<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
  name: 'App',
  data() {
    return {
      projects: '',
      baseUri: 'http://localhost:8000/api/projects'
    }
  },
  components: {
    ProjectCard
  },
  methods: {
    prevButton() {
      if (this.projects.prev_page_url) {
        this.projects = this.projects.prev_page_url;
        axios
          .get(this.projects)
          .then(
            result => {
              this.projects = result.data.projects;
            }
          )
      }
    },
    nextButton() {
      if (this.projects.next_page_url) {
        this.projects = this.projects.next_page_url;
        axios
          .get(this.projects)
          .then(
            result => {
              this.projects = result.data.projects;
            }
          )
      }

    },
    indexButton(index) {
      if (this.projects.links[index].url) {
        this.projects = this.projects.links[index].url;
        axios
          .get(this.projects)
          .then(
            result => {
              this.projects = result.data.projects;
            }
          )
      }
    }
  },
  mounted() {
    axios
      .get(this.baseUri)
      .then(
        result => {
          console.log(result.data.projects);
          this.projects = result.data.projects;
        }
      )
  }
}
</script>

<template>
  <div class="container">
    <nav>
      <ul class="pagination">
        <li class="page-item" @click="prevButton()"><a class="page-link">Previous</a></li>
        <li class="page-item" v-for="index in projects.last_page" @click="indexButton(index)"><a class="page-link" href="#">{{ index }}</a></li>
        <li class="page-item" @click="nextButton()"><a class="page-link">Next</a></li>
      </ul>
    </nav>

    <div class="row">
      <div class="col-4 my_height g-3" v-for="project in projects.data">
        <ProjectCard :project="project" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.my_height {
  height: 20rem;
}
</style>
