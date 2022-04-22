<template>
  <header class="header">
    <NavBar />
    <Hamburger />
    <div class="container">
      <h1 class="title">
        <slot></slot>
      </h1>
    </div>
  </header>
</template>

<script>
import NavBar from './NavBar.vue'
import Hamburger from './Hamburger.vue'
export default { components: { NavBar, Hamburger } }
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 250px;
  padding-top: 32px;
  text-align: center;
  margin-bottom: 16px;

  background: linear-gradient(
      to bottom,
      hsla(200, 100%, 11%, 1) 0,
      hsla(200, 100%, 11%, 0.82) 3%,
      hsla(200, 100%, 11%, 0.82) 92%,
      hsla(200, 100%, 11%, 1) 100%
    ),
    url('/header-back.jpg');
  background-position: center;
}

.title {
  margin-top: 80px;
  font-size: 36px;
  color: $white;
  font-family: 'Zen Antique';
  font-weight: 400;

  span {
    color: $primary;
  }
}

@include mq(sm) {
  .header {
    height: 300px;
    margin-bottom: 48px;
  }

  .title {
    font-size: 52px;
  }
}

@include mq(md) {
  .header {
    height: 500px;
  }

  .title {
    font-size: 72px;
    margin-top: 200px;
  }
}
</style>
