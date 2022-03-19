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
          <h3 class="genre-title">LINE UP</h3>
          <li class="nav-item"><nuxt-link to="#">都市文化祭とは</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="#">企画一覧</nuxt-link></li>
          <h3 class="genre-title">GUIDES</h3>
          <li class="nav-item"><nuxt-link to="#">アクセス</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="#">入試情報</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="#">お問合せ</nuxt-link></li>
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
  background-color: hsla(200, 100%, 14%, 0.3);
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
  padding: 24px;
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
  display: grid;
  gap: 12px;
  padding-top: 32px;
  list-style: none;
  color: $white;
}

.genre-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 2px;

  &:not(:first-child) {
    margin-top: 12px;
  }
}

.nav-item {
  padding-bottom: 12px;
  border-bottom: 0.5px solid;
  border-color: hsla(0, 0%, 100%, 0.5);

  a {
    color: $white;
    font-size: 16px;
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
