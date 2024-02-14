import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
        path: '/',
        name: 'Home',
        component: () => import('@/views/MainPage.vue'),
      },
      {
        path: '/course/0',
        name: '0',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/1',
        name: '1',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/2',
        name: '2',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/3',
        name: '3',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/4',
        name: '4',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/5',
        name: '5',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/6',
        name: '6',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/7',
        name: '7',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/8',
        name: '8',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/9',
        name: '9',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/10',
        name: '10',
        component: () => import('@/views/CoursePage.vue'),
      },
      {
        path: '/course/11',
        name: '11',
        component: () => import('@/views/CoursePage.vue'),
      },
      
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router;
