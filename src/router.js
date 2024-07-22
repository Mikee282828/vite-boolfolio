import { createRouter, createWebHistory } from 'vue-router';

import AppAbout from './pages/AppAbout.vue';
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppContacts from './pages/AppContacts.vue';
import SingleCard from './pages/SingleCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppHome
        },
        {
            path: '/about',
            component: AppAbout
        },
        {
            path: '/projects',
            component: AppProjects
        },
        {
            path: '/contacts',
            component: AppContacts
        },
        {
            name: 'single-card',
            path: '/projects/:id',
            component: SingleCard
        }
    ]
})
export { router };