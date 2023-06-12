import { createRouter, createWebHistory } from 'vue-router'
import Read from '../components/Read.vue'
import Update from '../components/Update.vue'
import Detail from '../components/Detail.vue'
import NewCreate from '../components/NewCreate.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignIn.vue'
import Info from '../components/Info.vue' // 추가된 라우트 컴포넌트

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/info', // 자기소개 페이지 경로
    name: 'Info',
    component: Info
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { left: 0, top: 0, behavior: 'smooth' }
    }
  }
})

export default router
