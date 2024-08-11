<script setup>
import { useRouter, useRoute } from "vue-router";

defineProps({
  element: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const route = useRoute();

const toProjectView = (element) =>
  router.push({
    name: "project",
    params: { id: element.id },
    query: { project: element.project, team: element.team },
  });
</script>

<template>
  <div @click.capture="toProjectView(element)" class="grid-elem">
    <div class="my-3">
      <div style="font-size: 12px; font-weight: 600">
        {{ element.project == "" ? "Без названия" : element.project }}
      </div>
      <div class="d-flex w-100 h-100 p-2 align-items-end justify-content-between">
        <div class="elem-rect"></div>
        <div class="d-flex road-map align-items-center">
          <a @click.capture="router.push({ name: 'gant' })" class="card-btn w-100"
            >Дорожная карта</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.elem-rect
  width: 49px
  height: 49px
  border-radius: 4px
  background: rgb(122, 121, 121)
.road-map
  width: 100px
  height: 19px
  border-radius: 4px
  background: rgb(179, 179, 179)
.card-btn
  width: 82px
  height: 12px
  color: rgb(0, 0, 0)
  font-size: 10px
  font-weight: 500
  text-decoration: none
</style>
