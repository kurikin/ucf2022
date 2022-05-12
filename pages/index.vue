<template>
  <div class="black">
    <Splash v-if="showSplash" />
    <div v-else class="content">
      <HomeHeader />
      <HomeNavBar />
      <News :contents="this.contents" />
      <Pickup />
      <Footer />
    </div>
  </div>
</template>

<script>
import HomeHeader from '~/components/home/HomeHeader.vue'
import News from '~/components/home/News.vue'
import Pickup from '~/components/home/Pickup.vue'
import Splash from '~/components/Splash.vue'

export default {
  name: 'IndexPage',
  components: {
    HomeHeader,
    News,
    Pickup,
    Splash,
  },
  data() {
    return {
      showSplash: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSplash = false
    }, 1500)
  },
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 20 },
    })
    return data
  },
}
</script>

<style lang="scss" scoped>
.fadeIn {
  animation-name: fadeInAnime;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
</style>
