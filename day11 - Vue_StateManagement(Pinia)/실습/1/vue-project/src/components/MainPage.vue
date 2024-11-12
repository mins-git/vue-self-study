<template>
    <div class="pinia-example">
      <h1 class="example-title">Pinia 연습하기</h1>
  
      <div v-for="family in store.familyInfo" :key="family.familyName" class="family-card">
        <ParentPage :family="family"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import ParentPage from '@/components/ParentPage.vue'
  import { useFamilyStore } from '@/stores/family'
  
  const store = useFamilyStore()
  </script>
  
  <style scoped>
  .pinia-example {
    padding: 30px;
    background-color: #f3f4f6;
    text-align: center; /* 텍스트 가운데 정렬 */
  }
  
  .example-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .family-card {
    margin-bottom: 30px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  </style>
  