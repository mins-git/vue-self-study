<template>
    <div class="parent-page">
      <h1 class="parent-title">부모 컴포넌트</h1>
      <p class="parent-info">{{ family.father }}</p>
      <p class="parent-info">{{ family.mother }}</p>
  
      <div v-for="child in family.children" :key="child.name">
        <ChildPage :child="child"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  import ChildPage from '@/components/ChildPage.vue'
  
  defineProps({
    family: Object
  })
  </script>
  
  <style scoped>
  .parent-page {
    padding: 20px;
    background-color: #e7e7e7;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center; /* 텍스트 가운데 정렬 */
  }
  
  .parent-title {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 15px;
  }
  
  .parent-info {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 10px;
  }
  
  .parent-page > div {
    margin-top: 20px;
  }
  </style>
  