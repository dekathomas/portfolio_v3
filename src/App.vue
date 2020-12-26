<template>
  <div id="app">
    <NavbarMenu></NavbarMenu>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu'

export default {
  name: 'App',
  components: {
    NavbarMenu
  }
}
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.fade-enter-active,
.face-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
