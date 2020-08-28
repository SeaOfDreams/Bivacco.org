import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import AddIncidente from '../views/AddIncidente.vue'
import VediIncidente from '../views/VediIncidente.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/signin',
    name: 'Login',
    component: Login
  },
  {
    path: '/add',
    name: 'aggiungi-incidente',
    component: AddIncidente
  },
  {
    path: '/:incidente_idd',
    name: 'vedi-incidente',
    component: VediIncidente
  },
  
  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
