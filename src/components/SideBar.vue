<script setup></script>

<template>
  <div
    class="offcanvas offcanvas-end bg-sidebar-main"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="main mx-5">
      <div class="row">
        <div class="col-11">
          <h5 class="title">Создайте новый проект</h5>
        </div>
        <div class="col-1">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <h5 class="subtitle">Чтобы начать, создайте проект</h5>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row mt-3">
        <div class="col-7">
          <h5 class="settings-title">Основные настройки</h5>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row mt-1">
        <div class="col-12">
          <div class="mb-3">
            <label class="project-name__label">Название проекта</label>
            <input type="text" class="form-control input-style" required />
          </div>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row g-2">
        <div class="col-6">
          <div class="mb-3">
            <label class="project-name__label">Дата начала</label>
            <input type="date" class="form-control input-style" required />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label class="project-name__label">Дата окончания</label>
            <input type="date" class="form-control input-style" required />
          </div>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row mt-1">
        <div class="col-7">
          <h5 class="settings-title">Участники</h5>
        </div>
        <div class="col-5"></div>
      </div>
      <div class="row mt-1">
        <div class="col-12">
          <div class="mb-3">
            <label class="project-name__label">Выбрать команды</label>
            <input type="text" class="form-control input-style" required />
          </div>
        </div>
        <div class="col-5"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.main
  margin-top: 70px
.bg-sidebar-main
  width: 504px
  background: rgb(236, 236, 236)
.title
  color: rgb(0, 0, 0)
  font-size: 23px
  font-weight: 400
  line-height: 120%
  letter-spacing: 0%
  text-align: left
.subtitle
  color: rgb(0, 0, 0)
  font-size: 10px
  font-weight: 400
  line-height: 12px
  letter-spacing: 0%
  text-align: left
  opacity: 0.7
.settings-title
  color: rgb(0, 0, 0)
  font-size: 12px
  font-weight: 500
  line-height: 15px
  letter-spacing: 0%
  text-align: left
  opacity: 0.7
.input-style
  box-sizing: border-box
  border: 1px solid rgb(155, 155, 155)
  border-radius: 4px
  background: rgb(225, 225, 225)
  color: rgb(23, 23, 23)
  font-size: 12px
  font-weight: 400
  line-height: 15px
  letter-spacing: 0%
  text-align: left
  opacity: 0.7
.project-name__label
  width: 100%
  margin-bottom: 4px
  color: rgb(0, 0, 0)
  font-size: 10px
  font-weight: 400
  line-height: 12px
  letter-spacing: 0%
  text-align: left
  opacity: 0.7
</style>
