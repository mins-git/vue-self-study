<template>
    <div>
        <form @submit.prevent="createArticle">

            <div>
                <label for="title">제목 :</label>
                <input type="text" id="title" v-model.trim="title">
            </div>

            <div>
                <label for="content">내용 :</label>
                <textarea name="" id="content" v-model.trim="content"></textarea>

            </div>

            <input type="submit">

        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useArticleStore } from '@/stores/articles';
import axios from 'axios'
import { useRouter } from 'vue-router';

const title = ref(null)
const content = ref(null)
const store = useArticleStore()
const router = useRouter()

const createArticle = function () {
    
    axios({
        method : 'post',
        url: `${store.API_URL}/api/v1/articles/`,
        data: {
            title: title.value,
            content: content.value
        }
    }).then(() => {
        store.getArticles()
        router.push({name:'home'})
    }).catch((error) => console.log(error))
}

</script>

<style scoped>

</style>