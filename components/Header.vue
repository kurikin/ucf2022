<template>
  <header class="header">
    <NavBar />
    <div class="container">
      <h1 class="title">
        <slot></slot>
      </h1>
    </div>
  </header>
</template>

<script>
import NavBar from './NavBar.vue'
export default { components: { NavBar } }
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding-top: 32px;
  padding-bottom: 300px;
  text-align: center;

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
  margin-top: 200px;
  font-size: 64px;
  color: $white;
  font-family: 'Zen Antique';
  font-weight: 400;

  span {
    color: $primary;
  }
}
</style>
