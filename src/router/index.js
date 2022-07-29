import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnswerView from '../views/AnswerView.vue'
import ExeView from '../views/ExeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'exe'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/answer',
    name: 'answer',
    component: AnswerView
  },
  {
    path: '/exe',
    name: 'exe',
    component: ExeView
  }
]

const router = new VueRouter({
  routes
})

export default router
