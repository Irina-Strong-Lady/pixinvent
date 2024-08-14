<script setup>
import { useRouter } from "vue-router";

defineProps({
  element: {
    type: Object,
    required: true,
  },
  idx: {
    type: Number,
    required: true,
  },
});

const router = useRouter();

const toProjectView = (element, idx) =>
  router.push({
    name: "project",
    params: { id: element.id },
    query: { idx: idx },
  });
</script>

<template>
  <div @click.capture="toProjectView(element, idx)" class="grid-elem">
    <div class="my-3">
      <div class="card-title">
        {{ element.project == "" ? "Без названия" : element.project }}
      </div>
      <div class="d-flex w-100 h-100 p-2 align-items-end justify-content-between">
        <div class="elem-rect"></div>
        <div class="d-flex road-map align-items-center">
          <a @click.capture="router.push({ name: 'gant' })" class="card-btn w-100"></a>
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
  background: $bs-body-bg
.card-title
  font-size: 12px
  font-weight: 600
  color: $text-main
.road-map
  width: 100px
  height: 19px
  border-radius: 4px
  background: $bs-body-bg
.card-btn
  width: 82px
  height: 12px
  color: $text-main
  font-size: 10px
  font-weight: 500
  text-decoration: none
</style>
