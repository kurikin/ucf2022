<template>
  <div class="container">
    <nav class="home-nav-bar">
      <ul class="nav-list">
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
.home-nav-bar {
  display: none;
  background-color: $white;
  margin-bottom: 80px;
  border-radius: $radius-xs;
  padding: 20px 0;

  @include mq(md) {
    display: block;
  }
}

.divider {
  width: 1px;
  height: 30px;
  background: $lightgray;
}

.nav-list {
  display: flex;
  justify-content: space-between;
}

.list-item {
  flex: 1;
  text-align: center;
}
.nav-link:link,
.nav-link:visited {
  flex: 1;
  font-size: 18px;
  display: inline-block;
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
