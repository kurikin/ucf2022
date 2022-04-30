<template>
  <div class="container">
    <nav
      class="black-nav-bar"
      :class="{ 'black-nav-bar--hidden': !showNavBar }"
    >
      <ul class="nav-list">
        <li class="list-item">
          <nuxt-link to="/">
            <img class="logo-img" src="/logo.png" alt="" />
          </nuxt-link>
        </li>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/">ホーム</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/about">都市文化祭とは</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="">企画一覧</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/department-intro"
            >学科紹介</nuxt-link
          >
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/studios/about"
            >スタジオ紹介</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavBar: true,
      lastScrollPosition: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition < 0) {
        return
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 20) {
        return
      }

      this.showNavBar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
  },
}
</script>

<style lang="scss" scoped>
.black-nav-bar {
  display: none;
  position: fixed;

  top: 50px;
  left: 50%;
  height: 70px;

  transform: translateX(-50%);
  width: calc(100% - 50px);
  max-width: 1100px;
  background-color: $black;
  border-radius: $radius-xs;
  z-index: 999;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.3);
  transition: 0.25s all ease-out;

  &--hidden {
    transform: translate(-50%, -120px);
    box-shadow: none;
  }

  @include mq(md) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.logo-img {
  margin: 0 auto;
  display: block;
  width: 70px;
}

.divider {
  width: 1px;
  height: 30px;
  background: $white;
}

.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-item {
  flex: 1;
  text-align: center;

  &:first-child {
    flex: 0.8;
  }
}
.nav-link:link,
.nav-link:visited {
  flex: 1;
  font-size: 16px;
  display: inline-block;
  font-weight: 700;
  color: $white;
  transition: all 0.3s;

  @include mq(lg) {
    font-size: 20px;
  }
}
.nav-link:hover,
.nav-link:active {
  color: $white;
}
</style>
