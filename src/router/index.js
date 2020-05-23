import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: 'Iniciomodal'
    },
   
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/header',
    name: 'header',
    component: () => import(/* webpackChunkName: "header" */'../views/Header.vue')
  },
  {
    path: '/fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "fotos" */'../views/Fotos.vue')
  },
  {
    path: '/',
    name: 'InicioModal',
    component: () => import(/* webpackChunkName: "InicioModal" */'../views/InicioModal.vue')
  },
 {
   path: 'https://modest-kepler-f68d08.netlify.app',
   name: 'Home2'
 }

]

const router = new VueRouter({
  routes
})

export default router
