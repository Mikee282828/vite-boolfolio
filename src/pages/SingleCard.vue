<script>
import axios from 'axios';
export default {
    name: 'AppProjects',
    data() {
        return {
            projects: '',
            baseUrl: 'http://localhost:8000'
        }
    },
    mounted() {
        axios
            .get(`${this.baseUrl}/api/projects/${this.$route.params.id}`)
            .then(
                response => {
                    if (response.data.success) {
                        this.projects = response.data.projects;
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }

                }
            )
    }
}
</script>

<template>

    <div class="container">

        <div class="row">
            <div class="col-4 my_height g-3">
                <div class="card h-100">

                    <div v-if="projects.img_preview" class="h-50">
                        <img v-if="!projects.img_preview.startsWith('http')"
                            :src="'http://localhost:8000/storage/' + projects.img_preview" class="card-img-top h-100"
                            alt="...">

                        <img v-else :src="projects.img_preview" class="card-img-top object-fit-cover h-100" alt="...">

                    </div>

                    <div class="card-body overflow-hidden h-50">
                        <h5 class="card-title h-25">{{ projects.title }}</h5>
                        <p class="card-text overflow-hidden h-75">
                            {{ projects.description }}
                        </p>
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
