<script setup>
import SideBar from "../SideBar.vue";
</script>

<template>
  <div
    class="grid-elem"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <div class="d-flex w-100 h-100 align-items-center justify-content-center">
      <svg
        width="32.000000"
        height="32.000000"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M16 30C12.28 30 8.72 28.52 6.1 25.89C3.47 23.27 2 19.71 2 16C2 12.28 3.47 8.72 6.1 6.1C8.72 3.47 12.28 2 16 2C19.71 2 23.27 3.47 25.89 6.1C28.52 8.72 30 12.28 30 16C30 19.71 28.52 23.27 25.89 25.89C23.27 28.52 19.71 30 16 30ZM16 32C20.24 32 24.31 30.31 27.31 27.31C30.31 24.31 32 20.24 32 16C32 11.75 30.31 7.68 27.31 4.68C24.31 1.68 20.24 0 16 0C11.75 0 7.68 1.68 4.68 4.68C1.68 7.68 0 11.75 0 16C0 20.24 1.68 24.31 4.68 27.31C7.68 30.31 11.75 32 16 32Z"
          fill="#acabc1"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M16 8C16.26 8 16.51 8.1 16.7 8.29C16.89 8.48 17 8.73 17 9L17 15L23 15C23.26 15 23.51 15.1 23.7 15.29C23.89 15.48 24 15.73 24 16C24 16.26 23.89 16.51 23.7 16.7C23.51 16.89 23.26 17 23 17L17 17L17 23C17 23.26 16.89 23.51 16.7 23.7C16.51 23.89 16.26 24 16 24C15.73 24 15.48 23.89 15.29 23.7C15.1 23.51 15 23.26 15 23L15 17L9 17C8.73 17 8.48 16.89 8.29 16.7C8.1 16.51 8 16.26 8 16C8 15.73 8.1 15.48 8.29 15.29C8.48 15.1 8.73 15 9 15L15 15L15 9C15 8.73 15.1 8.48 15.29 8.29C15.48 8.1 15.73 8 16 8Z"
          fill="#acabc1"
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
      </svg>
      <p class="text-element__init my-0 mx-2">Добавить проект</p>
    </div>
  </div>
  <SideBar />
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.text-element__init
  color: $text-main
  font-size: 12px
  font-weight: 500
</style>
