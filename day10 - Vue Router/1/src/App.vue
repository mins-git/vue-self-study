<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainPage from './components/MainPage.vue';


</script>

<template>
  <header>

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <MainPage/>
        <RouterLink :to="{ name : 'some'}">Some</RouterLink>
        |
        <RouterLink :to="{ name : 'other'}">Other</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
