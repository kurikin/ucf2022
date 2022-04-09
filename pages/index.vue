<template>
  <div>
    <HomeHeader />
    <Hamburger />
    <HomeNavBar />
    <News :contents="this.contents" />
    <Pickup />
    <Footer />
  </div>
</template>

<script>
import Pickup from '../components/Pickup.vue'
export default {
  name: 'IndexPage',
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 20 },
    })
    return data
  },
  components: { Pickup },
}
</script>

<style lang="scss" scoped></style>
