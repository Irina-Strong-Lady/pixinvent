<script setup>
defineProps({
  color: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  choice: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="row my-2">
    <div class="col-1">
      <svg
        width="26.000000"
        height="26.000000"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <circle
          id="Ellipse 1"
          cx="13.000000"
          cy="13.000000"
          r="13.000000"
          :fill="`${color}`"
          fill-opacity="1.000000"
        />
      </svg>
    </div>
    <div class="col-8 mx-2 mx-md-0 col-md-6">
      <h5 class="chosen-team__title">{{ team }}</h5>
      <h5 class="chosen-team__subtitle">{{ choice }}</h5>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.chosen-team__title
  color: rgb(0, 0, 0)
  margin: 0
  padding: 0
  font-size: 12px
  font-weight: 400
  line-height: 100%
  letter-spacing: 0%
  text-align: left
  opacity: 0.7
</style>
