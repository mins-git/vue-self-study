<template>
  <div>
    <!-- <RouterLink :to="{ name: 'create' }">게시글 생성</RouterLink> -->
    <button @click="$router.push({ name: 'create' })">게시글 생성</button>

    <div v-for="article in store.articles"
    :key="article.id">
    <h4>{{ article.id }}번 게시글</h4>
      <p>제목 : {{ article.title }}</p>
      <p>내용 : {{ article.content }}</p>
      <hr>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useArticleStore } from '@/stores/articles'


const store = useArticleStore()

onMounted(() => {
  store.getArticles()
  console.log(store.articles)
})
</script>

<style lang="scss" scoped>

</style>