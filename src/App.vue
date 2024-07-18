<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
export default {
  name: 'App',
  data() {
    return {
      projects : ''
    }
  },
  components:{
    ProjectCard
  },
  mounted() {
    axios
    .get('http://localhost:8000/api/projects')
    .then(
      result=>{
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
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#" v-for="project,index in projects.">1</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>

    <div class="row">
      <div class="col-4 my_height g-3" v-for="project in projects.data">
        <ProjectCard :project="project"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.my_height{
  height:20rem;
}
</style>
