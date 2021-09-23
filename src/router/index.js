import Vue from 'vue'
import VueRouter from 'vue-router'
import filmRouter from './film.js'
import cinemaRouter from './cinema.js'
import centerRouter from './center.js'

Vue.use(VueRouter)

const routes = [
   filmRouter,
   cinemaRouter,
   centerRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
