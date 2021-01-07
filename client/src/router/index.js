/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import AddIncidente from '../views/AddIncidente.vue'
import VediIncidente from '../views/VediIncidente.vue'
import firebase from 'firebase'


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
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/signin',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/add',
    name: 'aggiungi-incidente',
    component: AddIncidente,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/:incidente_id',
    name: 'vedi-incidente',
    component: VediIncidente
  },


]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // History back position, if user click Back button
      return savedPosition
    } else {
      // Scroll to top of page if the user didn't press the back button
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  //Check for guards
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if not logged in
    if (!firebase.auth().currentUser) {
      next({
        path: '/register',
        
        query: {
          redirect: to.fullPath
        }

      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //check if logged in
    if (firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }

      });
    } else {
      next();
    }
    
  } else {
    next();
  }

})

export default router
