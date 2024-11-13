<template>
  <div>
    <h1>Article Page</h1>
    <RouterLink :to="{ name: 'CreateView' }">Create</RouterLink>
    <ArticleList/>

  </div>
</template>

<script setup>
import ArticleList from '@/components/ArticleList.vue'
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { RouterLink } from 'vue-router'

const store = useCounterStore()

onMounted(() => { //게시글이 버튼을 눌러서 생기지 않잖아? 
  // mount 되기전에 store에 있는 전체 게시글 요청 함수를 호출해야지!
  store.getArticles()
})

</script>

<style>

</style>
