<template>
  <div class="container">
    <nav class="home-nav-bar">
      <ul class="nav-list">
        <li class="list-item">
          <nuxt-link class="nav-link" to="/">ホーム</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/about">都市文化祭とは</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/events">企画一覧</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/departments">学科紹介</nuxt-link>
        </li>
        <div class="divider"></div>
        <li class="list-item">
          <nuxt-link class="nav-link" to="/studios">スタジオ紹介</nuxt-link>
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
  border-radius: 24px;
  height: 65px;
  margin-top: 80px;

  @include mq(md) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @include mq(lg) {
    margin-top: 110px;
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
  font-weight: 700;

  @include mq(lg) {
    font-size: 20px;
  }
}
.nav-link:hover,
.nav-link:active {
  color: $primary;
}
</style>
