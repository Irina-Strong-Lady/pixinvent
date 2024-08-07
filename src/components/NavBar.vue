<template>
  <nav>
    <nav class="navbar navbar-expand-lg navbar-light nav-custom bg-main border border-white">
      <div class="container">
        <div class="brand-custom"></div>
        <div>
          <a href="#!" class="btn btn-custom"></a>
        </div>
      </div>
    </nav>
  </nav>
</template>

<style lang="sass" scoped>
@import '@/assets/styles/main'
.bg-main
  background: $bg-main
.nav-custom
  height: 80px
.brand-custom
  width: 81px
  height: 52px
  border-radius: 4px
  background: rgb(174, 174, 174)
.btn-custom
  font-family: Inter
  width: 135px
  height: 28px
  padding: 0
  color: #FFF
  border-radius: 4px
  background: rgb(174, 174, 174)
</style>
