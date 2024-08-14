<script setup>
import GridElement from "./GridElement.vue";
import GridElementInitial from "./GridElementInitial.vue";
import { useSideBarStore } from "@/stores/sidebar";

const sideBarStore = useSideBarStore();
</script>

<template>
  <body class="body-bg">
    <div class="container my-4">
      <div
        class="row gx-1 gap-3 text-center justify-content-sm-start justify-content-center"
      >
        <div>
          <h5 class="title">Проекты</h5>
        </div>
        <GridElementInitial />
        <transition-group name="page">
          <GridElement
            v-for="(element, idx) in sideBarStore.toProjectTeamsArray"
            :key="element.id"
            :element="element"
            :idx="idx"
          />
        </transition-group>
      </div>
      <!-- Button trigger modal -->
      <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="vh-100 vw-100">
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content rounded-1 popup">
              <div class="modal-header">
                <h5 class="modal-title popup-font" id="exampleModalLabel">Внимание!</h5>
              </div>
              <div class="modal-body popup-font">Перейдите в область выбора проекта</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary popup-font"
                  data-bs-dismiss="modal"
                >
                  Понятно
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.title
  color: $text-main
  font-size: 12px
  font-weight: 500
  line-height: 15px
  letter-spacing: 0%
  text-align: left
.popup
  background: $bg-menu-theme
  color: $text-main
.popup-font
  font-size: 14px
  background: $bs-black
  color: $bg-input-color
.page-enter-active,
.page-leave-active
  transition: 600ms ease all
.page-enter-from,
.page-leave-to
  opacity: 0
</style>
