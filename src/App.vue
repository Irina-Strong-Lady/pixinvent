<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <main>
    <NavBar />
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </main>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.page-enter-active,
.page-leave-active
  transition: 600ms ease all
.page-enter-from,
.page-leave-to
  opacity: 0
</style>
