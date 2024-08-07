<script setup>
import GridElement from './GridElement.vue'
import GridElementInitial from './GridElementInitial.vue'
import { projectsArray } from '@/composable'
</script>

<template>
  <body>
    <div class="container my-4">
      <div class="row gx-1 gap-3 text-center justify-content-sm-start justify-content-center">
        <div>
          <h5 class="title">Проекты</h5>
        </div>
        <GridElementInitial />
        <GridElement v-for="element in projectsArray" :key="element.id" :element="element" />
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
                <button type="button" class="btn btn-secondary popup-font" data-bs-dismiss="modal">
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
  color: rgb(0, 0, 0)
  font-family: Inter
  font-size: 12px
  font-weight: 500
  line-height: 15px
  letter-spacing: 0%
  text-align: left
.popup
  background: $bg-main
.popup-font
  font-size: 14px
</style>
