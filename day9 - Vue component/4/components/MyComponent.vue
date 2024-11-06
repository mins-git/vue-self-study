<template>
  <div>
    <header class="fixed-top d-flex justify-content-center align-items-center bg-light py-3">
      <h1 class="text-center m-0">Gallery</h1>
    </header>

    <main class="container mt-5 pt-5">
      <div class="row g-4">
      <div class="col-12 col-sm-6 col-md-4" v-for="n in numberOfItems" :key="n">
        <div class="card" style="width: 18rem">
          <img :src="sampleImage" class="card-img-top" alt="Sample Image" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    </main>
  </div>
</template>

<script setup>

import sampleImage from '@/assets/sample.png';
import { ref } from 'vue'

const numberOfItems = ref(4)

</script>

<style scoped></style>
