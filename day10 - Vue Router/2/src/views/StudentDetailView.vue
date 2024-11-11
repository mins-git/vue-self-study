<template>
    <div>
        <h4> 이름: {{ StudentsName }}</h4>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const StudentsName = route.params.name;

</script>

<style scoped>

</style>