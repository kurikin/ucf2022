<template>
  <div class="background">
    <transition name="fade">
      <img
        v-show="showSplash"
        id="splash"
        class="splash"
        src="/background.png"
        alt=""
      />
    </transition>
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

    this.$nextTick(function () {
      setTimeout(() => {
        this.showSplash = false
      }, 1350),
        setTimeout(() => {
          this.$emit('closeSplash')
          this.toggleFirstLoad()
        }, 1750)
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
  z-index: 1;
}

.splash {
  display: block;
  width: 250px;
  height: 250px;
}
</style>
