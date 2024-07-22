<script>
export default {
    name: 'AppHeader',
    methods:{
        isActive(path){
            if(this.$route.path == path){
                return 'active'
            }
        }
    }
}
</script>

<template>

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <RouterLink to="/" class="nav-link" :class="isActive('/')">Go to Home</RouterLink>
                    <RouterLink to="/about" class="nav-link" :class="isActive('/about')">Go to About</RouterLink>
                    <RouterLink to="/projects" class="nav-link" :class="isActive('/projects')">Go to Projects</RouterLink>
                    <RouterLink to="/contacts" class="nav-link" :class="isActive('/contacts')">Go to Contacts</RouterLink>
                </div>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>