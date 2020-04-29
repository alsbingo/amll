import Vue from 'vue'
import VueRouter from 'vue-router'

//import Home from '../views/home/home.vue'
//import Category from '../views/category/category.vue'
//import Profile from '../views/profile/profile.vue'
//import Cart from '../views/cart/cart.vue'

const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    components: {//命名视图
      default: Home,
      top: Cart
    }
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '*',
    redirect: '/home'
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
