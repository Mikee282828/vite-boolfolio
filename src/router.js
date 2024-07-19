import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: 'AppHome'
    },
    {
      path: '/about',
      name: 'about',
      component: 'AppAbout'
    }
  ]
})
export { router };