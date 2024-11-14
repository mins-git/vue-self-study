import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useArticleStore = defineStore('article', () => {
  const articles = ref([])
  const token = ref(null)
  const router = useRouter();

  const isLogin = computed(() => {
    if (token.value === null){
      return false
    } else {
      return true
    }
  })

  const getArticles = function () {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/v1/articles/'
    })
    .then(res => articles.value = res.data)
  }

  const createArticle = function ({ title, content}) {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/articles/',
      data: {
        title,
        content
      }
    })
    .then(res => console.log(res))
  }

  const signUp = function(payload) {
    const {username, password1, password2 } = payload

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/accounts/signup/',
      data: {
        username, password1, password2
      }
    }).then ((res) => {
      console.log(res)
      console.log('회원가입 완료')
      const password = password1
      logIn({ username, password }, router);

    }).catch ((err) => {
      console.log(err)
      console.log(err.response.data)
    })
  }

  
  const logIn = function(payload) {
    // const username  payload.username
    // const password1 = payload.password1
    const { username, password } = payload

    axios({
      method: 'post',
      url:'http://127.0.0.1:8000/accounts/login/',
      data: {
        username: username,
        password: password,
      }
    })
    .then ((res) => {
      token.value = res.data.key
      router.push({ name: 'home' })
      console.log(res.data)
      console.log('로그인 성공')
    })
    .catch ((err) => {
      console.log(err)
      console.log(err.response.data)
    })
  }

  return { articles, getArticles, createArticle, signUp ,token, logIn , isLogin}
})
