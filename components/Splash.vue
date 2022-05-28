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
  position: absolute;
  top: 0;
  left: 0;
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
  width: 250px;
  height: 250px;
}
</style>
