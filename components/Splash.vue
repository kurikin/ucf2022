<template>
  <div class="background">
    <img id="splash" class="splash" src="/background.png" alt="" />
    <!-- <video autoplay class="splash">
      <source src="/splash.mp4" type="video/mp4" />
      <source src="/splash.webm" type="video/webm" />
    </video> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['splashParam']),
  },
  mounted() {
    const randomValue = Math.random()

    const imageTag = window.document.getElementById('splash')
    imageTag.setAttribute('src', `/splash.gif?${randomValue}`)

    this.$nextTick(function () {
      setTimeout(() => {
        this.$emit('closeSplash')
        this.toggleFirstLoad()
      }, 1800)
    })
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
  width: 200px;
  height: 200px;
}
</style>
