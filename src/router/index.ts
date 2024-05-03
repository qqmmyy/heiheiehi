import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/气候纵览',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:气候纵览
  },
   {
    path: '/',
    name: 'home',
    component: index
  },
   {
    path: '/人流出行',
    component: 人流出行
  },
  {
    path: '/美食风景',
    component: 美食风景
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
