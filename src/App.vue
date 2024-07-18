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
    },
    linkButton(index){
      if (this.projects.links[index].url) {
        axios
          .get(this.projects.links[index].url)
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
        <li class="page-item my_cursor-pointer" @click="linkButton(0)"><a class="page-link">Previous</a></li>
        <li class="page-item my_cursor-pointer" v-for="index in projects.last_page" @click="linkButton(index)"><a class="page-link">{{ index }}</a></li>
        <li class="page-item my_cursor-pointer" @click="linkButton(projects.last_page+1)"><a class="page-link">Next</a></li>  
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
.my_cursor-pointer{
  cursor: pointer;
}
</style>
