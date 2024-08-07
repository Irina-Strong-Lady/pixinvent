<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="row p-5 align-items-center justify-content-center">
    <h2 class="text-center">Это переход на страницу по роуту "/gant"</h2>
    <button @click="router.push({ name: 'home' })" class="btn w-50 my-5 btn-gant">Вернуться</button>
  </div>
</template>

<style lang="sass" scoped>
.btn-gant
  background: rgb(174, 174, 174)
  color: #FFF
</style>
