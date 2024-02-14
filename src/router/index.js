import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
        path: '/',
        name: 'Home',
        component: () => import('@/views/MainPage.vue'),
      },
      {
        path: '/course/:id',
        name: 'course',
        component: () => import('@/views/CoursePage.vue'),
      },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router;
