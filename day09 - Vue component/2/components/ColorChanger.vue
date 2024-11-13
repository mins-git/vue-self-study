<template>
    <div>
        <input 
        type="text"
        :class colorClass
        @input="handleInput" 
        placeholder="색을 입력하세요 (red, blue, green)"
        >
        <p :style="{ color: colorClass }">입력창에 올바른 색상 명을 입력하면 글자색이 바껴요</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const colorClass = ref('')

const handleInput = async (event) => {
  const inputValue = event.target.value;

  // 비동기 처리 예시 (setTimeout을 사용한 예시)
  await new Promise(resolve => setTimeout(resolve, 500));

  if (['red', 'blue', 'green'].includes(inputValue)) {
    colorClass.value = inputValue;  // 유효한 색상일 경우 클래스 업데이트
  } else {
    colorClass.value = '';  // 유효하지 않으면 기본 색상
  }
};
</script>

<style scoped>
.red {
  border: 2px solid red;
}

.blue {
  border: 2px solid blue;
}

.green {
  border: 2px solid green;
}
</style>