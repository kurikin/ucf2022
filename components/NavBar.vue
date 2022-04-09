<template>
  <div class="container">
    <nav class="nav-bar">
      <ul class="nav-list">
        <li class="list-item">
          <img class="logo-img" src="logo-black.png" alt="" />
        </li>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/">ホーム</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/intro">都市文化祭とは</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="">企画一覧</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="">学科紹介</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 1100px;
  background-color: $white;
  border-radius: $radius-xs;
  padding: 12px 0;

  @include mq(md) {
    display: block;
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
  background: $lightgray;
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
  color: $black;
  transition: all 0.3s;

  @include mq(lg) {
    font-size: 20px;
  }
}
.nav-link:hover,
.nav-link:active {
  color: $primary;
}
</style>
