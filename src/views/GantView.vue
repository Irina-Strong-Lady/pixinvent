<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="container d-flex justify-content-center vh-100 vw-100">
    <div class="mt-5">
      <div class="border border-3 rounded mt-3 border-custom">
        <div class="p-2">
          <h3 class="text-decoration fw-bold">
            Это переход на страницу по роуту "/gant"
          </h3>
        </div>
      </div>
      <div class="text-center my-3">
        <button @click="router.push({ name: 'home' })" class="btn btn-gant">
          Вернуться
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.btn-gant
  background: $bs-black
  color: $bg-input-color
.text-decoration
  font-size: 16px
  color: $text-main
</style>
