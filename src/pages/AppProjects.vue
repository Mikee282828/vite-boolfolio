<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
export default {
    name: 'AppProjects',
    data() {
        return {
            projects: '',
            baseUri: 'http://localhost:8000/api/projects'
        }
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

    <div class="container">
        <nav>
            <ul class="pagination">
                <li class="page-item my_cursor-pointer" @click="urlButton(item.url)" v-for="item in projects.links"><a
                        class="page-link" v-html="item.label"></a></li>
            </ul>
        </nav>

        <div class="row">
            <div class="col-4 my_height g-3" v-for="project in projects.data">
                <div class="card h-100">
                    <img v-if="!project.img_preview.startsWith('http')"
                        :src="'http://localhost:8000/storage/' + project.img_preview" class="card-img-top h-25"
                        alt="...">

                    <img v-else :src="project.img_preview" class="card-img-top object-fit-cover h-25" alt="...">

                    <div class="card-body overflow-hidden h-75">
                        <h5 class="card-title h-25">{{ project.title }}</h5>
                        <p class="card-text overflow-auto h-50">
                            {{ project.description }}
                        </p>

                        <RouterLink :to="{ name: 'single-card' , params: { id: project.id }}" class="btn btn-primary">Details</RouterLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.my_height {
    height: 20rem;
}

.my_cursor-pointer {
    cursor: pointer;
}
</style>