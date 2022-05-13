<template>
  <div class="background">
    <img class="splash" :src="'/splash.gif?' + unixTime()" alt="" />
    <!-- <video autoplay class="splash">
      <source src="/splash.mp4" type="video/mp4" />
      <source src="/splash.webm" type="video/webm" />
    </video> -->
  </div>
</template>

<script>
export default {
  methods: {
    unixTime() {
      return new Date().getTime()
    },
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
  width: 180px;
  height: 180px;
}
</style>
