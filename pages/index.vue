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
export default {
  name: 'IndexPage',
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
