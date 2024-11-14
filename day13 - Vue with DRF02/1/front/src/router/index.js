import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleCreateView from '../views/ArticleCreateView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import { useArticleStore } from '@/stores/articles'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: ArticleCreateView
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LogInView',
      component: LoginView
    },
  ]
})


router.beforeEach((to, from) => {
  const store = useArticleStore()
  // 만약 이동하는 목적지가 메인 페이지이면서,
  // 현재 로그인 상태가 아니라면 로그인 페이지로 보냄
  if (to.name === 'home' && !store.isLogin){
    window.alert('로그인이 필요합니다')
    return {name:'LogInView'}
  }

  // 만약 로그인 사용자가 회원가입 또는 로그인 페이지로 이동하려고 하면
  // 메인 페이지로 보냄

  if ((to.name === 'SignUpView' || to.name === 'LogInView') && (store.isLogin)){
    window.alert('이미 로그인 되었습니다.')
    return { name: 'home' }
  }

})

export default router
