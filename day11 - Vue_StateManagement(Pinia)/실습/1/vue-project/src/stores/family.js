import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFamilyStore = defineStore('family', () => {
  // state
  const familyInfo = ref([
    {
      familyName: '메디치',
      father: '로도비코 데 메디치',
      mother: '마리아 살비아티',
      children: [
        { name: '틀레도의 엘 레오노르' },
        { name: '코시모 1세' }
      ]
    },
    {
      familyName: '전주 이씨',
      father: '이도',
      mother: '소헌왕후',
      children: [
        { name: '이향' },
        { name: '이유' }
      ]
    }
  ])

  // getter: 특정 가족 이름으로 정보를 가져오는 함수
  const getFamilyByName = computed(() => {
    return (name) => {
      return familyInfo.value.find(family => family.familyName === name)
    }
  })

  // action: 새로운 가족 정보를 추가하는 함수
  function addFamily(newFamily) {
    familyInfo.value.push(newFamily)
  }

  // action: 가족 정보를 업데이트하는 함수
  function updateFamily(index, updatedFamily) {
    familyInfo.value[index] = updatedFamily
  }

  // return
  return {
    familyInfo,
    getFamilyByName,
    addFamily,
    updateFamily
  }
})
