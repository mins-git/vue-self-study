<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home'}">Home</RouterLink> | 
        <RouterLink :to="{ name: 'SignUpView' }">SignUpView</RouterLink> |
        <RouterLink :to="{ name: 'LogInView' }">LogInView</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
