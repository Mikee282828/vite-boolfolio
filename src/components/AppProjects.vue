<script>
import axios from 'axios';
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
                        :src="'http://localhost:8000/storage/' + project.img_preview" class="card-img-top h-100"
                        alt="...">

                    <img v-else :src="project.img_preview" class="card-img-top object-fit-cover h-100" alt="...">

                    <div class="card-body overflow-auto">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">
                            {{ project.description }}
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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