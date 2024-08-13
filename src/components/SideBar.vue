<script setup>
import { ref, computed, nextTick, watch } from "vue";
import TeamMateInfo from "@/components/sidebar/TeamMateInfo.vue";
import TeamTitle from "@/components/sidebar/TeamTitle.vue";
import IconDropDown from "@/components/element/IconDropDown.vue";
import { useSideBarStore } from "@/stores/sidebar";

const sideBarStore = useSideBarStore();

const switchToggle = ref(false);

const collapseTeamKit = ref(false);

const search = ref("");

const filterData = computed(() =>
  sideBarStore.chosen.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase()) ||
      data.profile.toLowerCase().includes(search.value.toLowerCase())
  )
);

watch(filterData, () => {
  updateComponent();
  sideBarStore.checkedItems.length = 0;
});

const isRendered = ref(true);

const updateComponent = async () => {
  isRendered.value = false;
  await nextTick();
  isRendered.value = true;
};
</script>

<template>
  <div
    class="offcanvas offcanvas-end sidebar-main overflow-y-scroll"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <!-- Заголовок -->
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
      <!-- Подзаголовок -->
      <div class="row">
        <div class="col-7">
          <h5 class="subtitle">Чтобы начать, создайте проект</h5>
        </div>
        <div class="col-5"></div>
      </div>
      <!-- Блок настроек -->
      <div class="row mt-3">
        <div class="col-7">
          <h5 class="settings-title">Основные настройки</h5>
        </div>
        <div class="col-5"></div>
      </div>
      <!-- Текстовое поле ввода названия проекта -->
      <div class="row mt-1">
        <div class="col-12">
          <div class="mb-3">
            <label class="project-name__label">Название проекта</label>
            <input
              v-model="sideBarStore.projectName"
              type="text"
              class="form-control input-style"
              required
            />
          </div>
        </div>
        <div class="col-5"></div>
      </div>
      <!-- Поля ввода дат начала и окончания проекта -->
      <div class="row g-2">
        <div class="col-6">
          <div class="mb-3">
            <label class="project-name__label">Дата начала</label>
            <input
              v-model="sideBarStore.startDate"
              type="date"
              class="form-control input-style"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label class="project-name__label">Дата окончания</label>
            <input
              v-model="sideBarStore.expireDate"
              type="date"
              class="form-control input-style"
              required
            />
          </div>
        </div>
        <div class="col-5"></div>
      </div>
      <!-- Блок участников -->
      <div class="row mt-1">
        <div class="col-7">
          <h5 class="settings-title">Участники</h5>
        </div>
        <div class="col-5"></div>
      </div>
      <!-- Поле выбора команд из списка -->
      <div @click.stop class="row mt-1">
        <div class="col-12">
          <div class="mb-2">
            <label class="project-name__label">Выбрать команды</label>
            <div>
              <el-select
                v-model="sideBarStore.team"
                placeholder="Нажмите"
                @click.prevent="collapseTeamKit = true"
                class="input-style"
                size="small"
                :suffix-icon="IconDropDown"
              >
                <el-option
                  v-for="(item, idx) in sideBarStore.mutatedTeamsArray"
                  :key="item.team"
                  :value="item.team"
                  @click="
                    sideBarStore.getChosenTeam(idx);
                    switchToggle = false;
                  "
                >
                  <span style="font-size: 12px">{{ item.team }}</span>
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="col-5"></div>
      </div>
      <!-- Блок цветовых иконок выбарнных в проект лиц -->
      <div class="row">
        <div class="col-12">
          <h5 class="project-chosen__persons">
            Выбраны в проект:
            <svg
              v-for="color in sideBarStore.checkedItems"
              :key="color.id"
              class="mx-1"
              width="20.000000"
              height="20.000000"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <g opacity="0.800000">
                <circle
                  id="Ellipse 2"
                  cx="10.000000"
                  cy="10.000000"
                  r="10.000000"
                  :fill="color"
                  fill-opacity="1.000000"
                />
              </g>
            </svg>
            <svg
              width="8.949341"
              height="7.272949"
              viewBox="0 0 8.94934 7.27295"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <g opacity="0.400000">
                <path
                  id="+1"
                  d="M8.06 0L8.94 0L8.94 7.27L8.06 7.27L8.06 0.92L8.02 0.92L6.24 2.1L6.24 1.2L8.06 0ZM2.74 5.99L1.94 5.99L1.94 4.04L0 4.04L0 3.25L1.94 3.25L1.94 1.3L2.74 1.3L2.74 3.25L4.68 3.25L4.68 4.04L2.74 4.04L2.74 5.99Z"
                  fill="#000000"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </h5>
        </div>
      </div>
      <!-- Общий блок выбора команд с отображением участников -->
      <Transition name="team" mode="out-in">
        <div v-if="collapseTeamKit" class="team-kit" @click.stop>
          <el-scrollbar max-height="413px" wrap-class="team-kit" :noresize="true">
            <div class="scrollbar-demo-item">
              <div class="team-inner">
                <div class="row align-items-center">
                  <div class="col-md-6 col-2 me-3 me-md-0 team-title">Команды</div>
                  <div class="col-md-6 col-8 ms-4 ms-md-0 pe-1 pe-md-0">
                    <input
                      v-model="search"
                      type="text"
                      class="form-control input-style__team"
                      placeholder="Поиск по командам"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-12 pe-md-0">
                    <div class="team-underline"></div>
                  </div>
                </div>
                <!-- Динамический компонент команды -->
                <TeamTitle
                  :color="'#96A5CD'"
                  :team="sideBarStore.team == '' ? 'Название команды' : sideBarStore.team"
                  :choice="`выбрано ${sideBarStore.checkedItems.length} из ${sideBarStore.chosen.length}`"
                />
                <!-- Вертикальный список членов команды -->
                <TeamMateInfo
                  v-if="isRendered"
                  v-for="item in filterData.length > 0 ? filterData : sideBarStore.chosen"
                  :key="item.name"
                  :id="item.id"
                  :color="item.color"
                  :name="item.name"
                  :profile="item.profile"
                  :status="switchToggle"
                />
                <TeamMateInfo
                  v-if="sideBarStore.addNewMateName !== ''"
                  :id="sideBarStore.chosen.length + 1"
                  :color="sideBarStore.randomColor"
                  :name="sideBarStore.addNewMateName"
                  :profile="sideBarStore.addNewMateProfile"
                  :switchToggle="switchToggle"
                />
                <!-- Текстовые поля добавления новых членов в команду -->
                <div class="row mt-2 ps-2 pe-0 pe-md-3 g-1">
                  <div class="col-md-7 col-7">
                    <input
                      v-model="sideBarStore.addNewMateName"
                      type="text"
                      class="form-control input-style__team"
                      placeholder="ФИО *"
                      required
                    />
                  </div>
                  <div class="col-md-5 col-5">
                    <input
                      v-model="sideBarStore.addNewMateProfile"
                      type="text"
                      class="form-control input-style__team"
                      placeholder="Должность *"
                      required
                    />
                  </div>
                </div>
                <!-- Скрытое поле направления email выбранному выше участнику -->
                <div class="row ps-2 ps-md-0 mt-1 me-md-1">
                  <div class="col-2 col-md-2 ps-2">
                    <el-switch
                      v-model="switchToggle"
                      size="small"
                      style="
                        --el-switch-on-color: #000;
                        --el-switch-off-color: #fff;
                        --el-switch-border-color: #000;
                      "
                    />
                  </div>
                  <div class="col-5 col-md-3 col-md-5 my-auto mb-0 ps-0">
                    <h5 class="chosen-team__subtitle">Отправить приглашение</h5>
                  </div>
                  <Transition name="fade">
                    <div v-if="switchToggle" class="col-5 col-md-3 col-md-5 ps-0 ps-md-1">
                      <input
                        v-model="sideBarStore.addNewMateEmail"
                        type="email"
                        class="form-control input-style__team"
                        placeholder="Почта *"
                        required
                      />
                    </div>
                  </Transition>
                </div>
                <!-- Кнопка добавления нового участника в команду -->
                <div class="row ps-1">
                  <div class="col-3">
                    <button
                      @click="
                        sideBarStore.chosenToProject();
                        updateComponent();
                      "
                      class="btn-add"
                    >
                      <span>Добавить</span>
                    </button>
                  </div>
                  <div class="col-9"></div>
                </div>
                <!-- Список добавленных команд -->
                <TeamTitle
                  v-for="(item, idx) in sideBarStore.toProjectTeamsArray"
                  :key="item.id"
                  :color="item.color"
                  :team="item.team"
                  :choice="item.choice"
                  :class="idx == 0 ? 'mt-4' : ''"
                />
              </div>
            </div>
          </el-scrollbar>
        </div>
      </Transition>
      <div class="row">
        <div class="col-3">
          <button
            class="btn-begin mx-0 px-0 my-4"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            @click="
              collapseTeamKit = false;
              sideBarStore.resetOnStart();
            "
          >
            <span>Начать</span>
          </button>
        </div>
        <div class="col-9"></div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.sidebar-main
  width: 554px
  height: auto
  border: solid 1px rgb(236, 236, 236)
  background: rgb(217, 217, 217)
  @media screen and (max-width: 768px)
    width: 454px
.main
  margin-top: 70px
  @media screen and (max-width: 768px)
    margin-top: 35px
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
:deep(.el-select__wrapper)
  height: 28px
  background: rgb(225, 225, 225)
:deep(.el-select__wrapper.is-focused)
  box-shadow: none
:deep(.el-select__placeholder)
  color: rgb(23, 23, 23)
:depp(.el-select-dropdown__item.is-selected)
  color: rgb(23, 23, 23)
  font-weight: 400
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
.project-chosen__persons
  color: rgb(0, 0, 0)
  font-size: 10px
  font-weight: 400
  line-height: 100%
  letter-spacing: 0%
  text-align: left
  opacity: 0.4
.team-kit
  height: 413px
  box-sizing: border-box
  border: 1px solid rgb(155, 155, 155)
  border-radius: 4px
  background: rgb(225, 225, 225)
  padding-bottom: 15px
.team-inner
  box-sizing: border-box
  padding: 8px 16px
  width: 420px
  height: 291px
.team-title
  color: rgb(0, 0, 0)
  font-size: 10px
  font-weight: 400
  line-height: 12px
  letter-spacing: 0%
  text-align: left
.input-style__team
  height: 20px
  box-sizing: border-box
  border: 1px solid rgb(155, 155, 155)
  border-radius: 4px
  background: rgb(225, 225, 225)
  opacity: 0.4
  color: rgb(23, 23, 23)
  font-size: 10px
  font-weight: 400
  line-height: 12px
  letter-spacing: 0%
  text-align: left
  opacity: 0.3
.team-underline
  height: 0
  margin-top: 8px
  border: 1px solid rgb(0, 0, 0)
  opacity: 0.1
:deep(.el-switch__core .el-switch__action)
  border: 1px solid #000
  height: 13px
  width: 13px
  left: 0px
:deep(.el-switch--small .el-switch__core)
  border: 1px solid #000
  border-radius: 8px
  height: 14px
  min-width: 22px
.fade-enter-active,
.fade-leave-active
  transition: opacity 0.5s ease
.fade-enter-from,
.fade-leave-to
  opacity: 0
.btn-add
  box-shadow: none
  border: none
  background: none
  & > span
    outline: none
    padding: 0.275rem 1rem
    border-radius: 3px
    font-size: 9px
    font-weight: 400
    background: rgb(174, 174, 174)
    color: rgb(0, 0, 0)
    opacity: 0.9
    line-height: 100%
    letter-spacing: 0%
    &:hover, &:focus, &:active
      background: #7c7878
      transition: all .5s ease-in-out
  &:hover
    transform: scale(1.025)
    transition: all .5s ease-in-out
.btn-begin
  box-shadow: none
  border: none
  background: none
  & > span
    outline: none
    padding: .5rem 1.55rem
    border-radius: 4px
    font-size: 12px
    font-weight: 400
    background: rgb(174, 174, 174)
    color: rgb(0, 0, 0)
    opacity: 0.9
    line-height: 100%
    letter-spacing: 0%
    text-align: center
    &:hover, &:focus, &:active
      background: #7c7878
      transition: all .5s ease-in-out
  &:hover
    transform: scale(1.025)
    transition: all .5s ease-in-out
.team-enter-active,
.team-leave-active
  transition: 600ms ease all
.team-enter-from,
.team-leave-to
  opacity: 0
.scrollbar-demo-item
  display: flex
</style>
