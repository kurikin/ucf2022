<template>
  <div class="background">
    <img id="splash" class="splash" src="/background.png" alt="" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['splashParam']),
  },
  data() {
    return {
      showSplash: true,
    }
  },
  methods: {
    hideSplash() {},
    ...mapMutations(['toggleFirstLoad']),
  },
  mounted() {
    const randomValue = Math.random()

    const imageTag = window.document.getElementById('splash')
    imageTag.setAttribute('src', `/splash.gif?${randomValue}`)
  },
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black;
  // Larger than hanburder & modal overlay by 1
  z-index: 10002;
}

.splash {
  display: block;
  width: 250px;
  height: 250px;
}
</style>
