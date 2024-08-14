<template>
  <nav>
    <nav
      class="navbar navbar-expand-lg navbar-light nav-custom bg-main border border-dark"
    >
      <div class="container bg-menu">
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
  background: $bg-menu-theme
.nav-custom
  height: 80px
.brand-custom
  width: 81px
  height: 52px
  border-radius: 4px
  background: $bs-body-bg
.btn-custom
  font-family: Inter
  width: 135px
  height: 28px
  padding: 0
  color: #FFF
  border-radius: 4px
  background: $bs-body-bg
</style>
