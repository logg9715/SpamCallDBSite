import { createRouter, createWebHistory } from 'vue-router'
import Read from '../components/Read.vue'
import Update from '../components/Update.vue'
import Detail from '../components/Detail.vue'
import NewCreate from '../components/NewCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Read',
    component: Read
  },
  {
    path: '/update/:contentId',
    name: 'Update',
    component: Update
  },
  {
    path: '/detail/:contentId',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/newCreate',
    name: 'NewCreate',
    component: NewCreate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
