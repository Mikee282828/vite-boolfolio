<script>
export default {
    name: 'AppProjects',

}
</script>

<template>
    <div class="card h-100">
        <img v-if="!project.img_preview.startsWith('http')"
            :src="'http://localhost:8000/storage/' + project.img_preview" class="card-img-top h-100" alt="...">

        <img v-else :src="project.img_preview" class="card-img-top object-fit-cover h-100" alt="...">

        <div class="card-body overflow-auto">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
                {{ project.description }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<style scoped></style>