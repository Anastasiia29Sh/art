import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
        path: '/beauty-art',
        name: 'Home',
        component: () => import('@/views/MainPage.vue'),
      },
      {
        path: '/beauty-art/course/:id',
        name: 'course',
        component: () => import('@/views/CoursePage.vue'),
      },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;
