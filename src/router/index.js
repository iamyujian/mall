import Vue from 'vue'
import VueRouter from 'vue-router'

import Category from 'views/category/category.vue';
import Home from 'views/home/Home.vue';
import Profile from 'views/profile/profile.vue';
import ShopCart from 'views/shopcart/shopcart.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
