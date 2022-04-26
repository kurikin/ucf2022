<template>
  <div class="black">
    <HomeHeader />
    <Hamburger />
    <HomeNavBar />
    <News :contents="this.contents" />
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

<style lang="scss" scoped></style>
