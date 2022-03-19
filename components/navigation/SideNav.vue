<template>
  <div class="sidenav-container">
    <!-- サイドバーのバックドロップ背景 -->
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('sideNavClose')"
    ></div>
    <!-- トランジション -->
    <transition name="slide-side">
      <!-- サイドナブ -->
      <div v-if="show" class="sidenav">
        <!-- ハンバーガーメニュー -->
        <ul class="nav-list" @click="$emit('close')">
          <li class="nav-item"><nuxt-link to="#">ブログ</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="#">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="#">管理画面</nuxt-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: $black;
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}

.nav-list {
  padding-top: 24px;
  list-style: none;
  color: $white;
}

.nav-item {
  margin: 20px 0;

  a {
    color: $white;
    font-size: 20px;
  }
}

.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35px;
  width: 35px;
  cursor: pointer;
}
.bar {
  height: 2px;
  background: black;
  transition: all 0.3s ease-in-out 0.5s;
}
.bar:nth-child(1) {
  transform: rotate(135deg) translateY(-10px);
  transform-origin: bottom;
}
.bar:nth-child(2) {
  transform: rotate(-135deg) translateY(10px);
  transform-origin: top;
}
</style>
