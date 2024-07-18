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
        console.log(result.data.projects.data);
        this.projects = result.data.projects.data;
      }
    )
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4 my_height g-3" v-for="project in projects">
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
