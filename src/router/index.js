import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', 
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/chat-room',
    name: 'ChatRoom',
    component: () => import('../views/ChatRoom.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
