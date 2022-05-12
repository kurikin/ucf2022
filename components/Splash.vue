<template>
  <div class="background">
    <img class="splash" src="/splash.gif" alt="" />
  </div>
</template>

<script>
export default {
  beforeDestroy() {
    console.log('before destroy')
  },
}
</script>

<style lang="scss" scoped>
.background {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black;
  z-index: 100;
}

.splash {
  display: block;
  width: 300px;
  height: 300px;
}
</style>
