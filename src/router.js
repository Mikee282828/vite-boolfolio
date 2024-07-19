import { createRouter, createWebHistory } from 'vue-router';

import AppAbout from './components/AppAbout.vue';
import AppHome from './components/AppHome.vue';
import AppProjects from './components/AppProjects.vue';
import AppContacts from './components/AppContacts.vue';

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
        }
    ]
})
export { router };