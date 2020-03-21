import Vue from 'vue'
import VueRouter from 'vue-router'

import Category from 'views/category/Category.vue';
import Home from 'views/home/Home.vue';
import Profile from 'views/profile/Profile.vue';
import ShopCart from 'views/shopcart/ShopCart.vue';
import Detail from '../views/detail/Detail';
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
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
