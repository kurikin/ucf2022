<template>
  <div class="black">
    <HomeHeader />
    <HomeNavBar />
    <News class="fadeIn" :contents="this.contents" />
    <Pickup />
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '~/components/home/HomeHeader.vue'
import News from '~/components/home/News.vue'
import Pickup from '~/components/home/Pickup.vue'

export default {
  name: 'IndexPage',
  components: {
    HomeHeader,
    News,
    Pickup,
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
