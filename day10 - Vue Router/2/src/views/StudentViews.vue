<template>
    <div>
        <ul>
            <li v-for="student in students" :key="student.name">
        <router-link :to="{ name: 'studentsName', params: { name: student.name } }">
            {{ student.name }} 학생 정보 보기
        </router-link>
      </li>
    </ul>
    </div>
</template>

<script setup>

    const students = [
        {name: '김하나'},
        {name: '김두리'},
        {name: '김서이'},
    ]

</script>

<style scoped>

</style>