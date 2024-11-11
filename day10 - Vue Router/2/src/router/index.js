import { createRouter, createWebHistory } from 'vue-router'
import StudentViews from '../views/StudentViews.vue'
import StudentDetailView from '../views/StudentDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/students',
      name: 'students',
      component: StudentViews,
    },
    {
      path: '/students/:name',
      name: 'studentsName',
      component: StudentDetailView,
    }
    
  ]
})

export default router
