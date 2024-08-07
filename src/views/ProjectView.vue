<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
  <div class="row p-5 align-items-center justify-content-center">
    <h2 class="text-center">
      Это переход на страницу проекта по роуту "/project/{{ route.params.id }}"
    </h2>
    <div class="my-5 text-center">
      <h3>{{ route.query.title }}{{ route.params.id }}</h3>
      <h3>{{ route.query.desc }}</h3>
    </div>
    <button @click="router.push({ name: 'home' })" class="btn w-50 btn-gant">Вернуться</button>
  </div>
</template>

<style lang="sass" scoped>
.btn-gant
  background: rgb(174, 174, 174)
  color: #FFF
</style>
