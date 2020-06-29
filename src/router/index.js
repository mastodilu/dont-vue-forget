import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  if(to.meta && to.meta.requiresAuth){
    let user = firebase.auth().currentUser
    if(user){ // user signed in, proceed to route
      next()
    }else{ // not signed in, redirect to login
      next({name:'Login'})
    }
  } else {
    next()
  }
})

export default router
