<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="mt-3">
      <h2 class="text-center fs-5">Роут "/project/{{ route.params.id }}"</h2>
      <div class="border border-3 rounded mt-3">
        <div class="p-2">
          <h3 class="text-decoration">
            Проект:
            {{ route.query.project === "" ? "Без названия" : route.query.project }}
          </h3>
          <h3 class="text-decoration">Команда: {{ route.query.team }}</h3>
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
.btn-gant
  background: rgb(174, 174, 174)
  color: #FFF
.text-decoration
  font-size: 16px
</style>
