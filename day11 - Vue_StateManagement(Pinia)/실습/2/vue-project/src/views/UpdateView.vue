<template>
  <div>
    <h1>데이터 수정 페이지</h1>
    <p>{{ balanceData.name }}: {{ balanceData.balance }}원</p>
    <button @click="increaseBalance">+</button>
  </div>
</template>

<script setup>
import { useBalanceStore } from '@/stores/balance';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const balanceStore = useBalanceStore();
const balanceData = computed(() => balanceStore.getBalanceByName(route.params.name));

function increaseBalance() {
  balanceStore.increaseBalance(route.params.name);
}
</script>
