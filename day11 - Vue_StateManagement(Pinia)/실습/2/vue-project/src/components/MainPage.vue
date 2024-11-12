<template>
    <div>
      <p>{{ balance.name }}: {{ balance.balance }}원</p>
      <router-link :to="{ name: 'update', params: { name: balance.name } }">
        <button>updateBalance</button>
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    balance: Object,
  });
  </script>
  