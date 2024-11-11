<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <MainPage />
      <nav>
        <h1>router 연습하기</h1>
        
        <RouterLink to="/">Some</RouterLink>|
        <RouterLink to="/">Other</RouterLink>|
        <RouterLink :to="{ name: 'students'}">Students</RouterLink>


      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
