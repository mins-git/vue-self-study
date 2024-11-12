<template>
  <div>
    <h1>메인 페이지</h1>
    <MainPage
      v-for="balance in balances"
      :key="balance.name"
      :balance="balance"
    />
  </div>
</template>

<script setup>
import { useBalanceStore } from '@/stores/balance';
import MainPage from '@/components/MainPage.vue';
import { computed } from 'vue';

const balanceStore = useBalanceStore();
const balances = computed(() => balanceStore.balances);
</script>
