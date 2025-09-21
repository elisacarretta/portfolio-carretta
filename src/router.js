import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import ProjectDetail from './pages/ProjectDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  {
    path: '/portfolio/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true
  },
  { path: '/:catchAll(.*)', redirect: '/' }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

