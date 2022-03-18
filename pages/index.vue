<template>
  <div>
    <!-- ヘッダー -->
    <header class="header">
      <img class="logo" src="logo.png" alt="" />
    </header>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  width: 100%;
  background: url('/header-back.jpg');
  background-position: center;

  .logo {
    width: 100%;
    height: 100%;
    grid-column: 1;
    grid-row: 1 / -1;
  }
}
</style>
