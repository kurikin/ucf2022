<template>
  <div class="background">
    <img id="splash" class="splash" src="/background.png" alt="" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['splashParam']),
  },
  methods: {
    ...mapMutations(['toggleFirstLoad']),
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
  z-index: 1;
}

.splash {
  display: block;
  width: 250px;
  height: 250px;
}
</style>
