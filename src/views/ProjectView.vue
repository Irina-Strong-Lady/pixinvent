<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useSideBarStore } from "@/stores/sidebar";

const sideBarStore = useSideBarStore();

const router = useRouter();
const route = useRoute();
const idx = ref(route.query.idx);
</script>

<template>
  <div class="container d-flex align-items-center justify-content-center">
    <div class="mt-3">
      <div class="border border-3 rounded mt-3">
        <div class="p-2">
          <h3 class="text-decoration fw-bold">
            Название проекта:&nbsp;{{
              sideBarStore.toProjectTeamsArray[idx]?.project === ""
                ? "Без названия"
                : sideBarStore.toProjectTeamsArray[idx]?.project
            }}
          </h3>
          <h3 class="text-decoration">
            Команда: {{ sideBarStore.toProjectTeamsArray[idx]?.team }}
          </h3>
          <h3 class="text-decoration">
            Дата начала:&nbsp;{{ sideBarStore.toProjectTeamsArray[idx]?.start }}
          </h3>
          <h3 class="text-decoration">
            Дата окончания:&nbsp;{{ sideBarStore.toProjectTeamsArray[idx]?.expire }}
          </h3>
          <h3 class="text-decoration fst-italic">
            {{ sideBarStore.toProjectTeamsArray[idx]?.choice }}&nbsp;членов команды
          </h3>
          <h3 class="text-decoration">Участники проекта:</h3>
          <div v-for="item in sideBarStore.toProjectTeamsArray[idx]?.mate" :key="item.id">
            <h3 class="text-decoration">Имя:&nbsp;{{ item.name }}</h3>
            <h3 class="text-decoration">Профиль:&nbsp;{{ item.profile }}</h3>
          </div>
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
