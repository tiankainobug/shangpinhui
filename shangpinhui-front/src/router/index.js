import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Search from "@/pages/Search";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/search/:id',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
