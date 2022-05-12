<template>
  <div class="background" v-if="showSplash">
    <img class="splash" src="/splash.gif" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSplash: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSplash = false
    }, 2000)
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
