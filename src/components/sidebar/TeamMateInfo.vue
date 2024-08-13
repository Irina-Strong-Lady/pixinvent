<script setup>
import { ref } from "vue";
import { useSideBarStore } from "@/stores/sidebar";

const sideBarStore = useSideBarStore();

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  switchToggle: {
    type: Boolean,
    default: false,
  },
});

const switchToggle = ref(props.switchToggle);
</script>

<template>
  <div @click.stop class="row ps-1 justify-content-start">
    <div class="col-1 ms-1">
      <el-switch
        v-model="switchToggle"
        @input="sideBarStore.checkItem(props.id, props.color, $event)"
        size="small"
        style="
          --el-switch-on-color: #000;
          --el-switch-off-color: #fff;
          --el-switch-border-color: #000;
        "
      ></el-switch>
    </div>
    <div class="col-1 mx-2 mx-md-0 ps-1">
      <svg
        width="20.000000"
        height="20.000000"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <circle
          id="Ellipse 1"
          cx="10.000000"
          cy="10.000000"
          r="10.000000"
          :fill="`${props.color}`"
          fill-opacity="1.000000"
        />
      </svg>
    </div>
    <div class="col-5 col-md-4 ps-0 my-auto mb-0">
      <h5 class="team-mate__name">{{ props.name }}</h5>
    </div>
    <div class="col-2 col-md-5 mt-auto mb-0 me-0 pe-2 pe-md-0">
      <h5 class="team-mate__profile">{{ props.profile }}</h5>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
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
.team-mate__name
  color: rgb(0, 0, 0)
  font-size: 12px
  font-weight: 400
  line-height: 100%
  letter-spacing: 0%
  text-align: left
.team-mate__profile
  color: rgb(0, 0, 0)
  font-size: 10px
  font-weight: 400
  line-height: 100%
  letter-spacing: 0%
  text-align: right
  opacity: 0.4
</style>
