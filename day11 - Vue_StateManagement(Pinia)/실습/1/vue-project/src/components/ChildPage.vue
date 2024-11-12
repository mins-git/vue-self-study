<template>
    <div class="child-page">
      <h2 class="child-title">자식 페이지</h2>
      <p class="child-name">{{ child.name }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    child: Object
  })
  </script>
  
  <style scoped>
  .child-page {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center; /* 텍스트 가운데 정렬 */
  }
  
  .child-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .child-name {
    font-size: 1.2rem;
    color: #555;
  }
  </style>
  