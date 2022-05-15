<template>
  <div class="black-background">
    <Splash @closeSplash="closeSplash" v-if="showSplash && firstLoad" />
    <div v-else>
      <HomeHeader />
      <HomeNavBar />
      <News :contents="this.contents" />
      <Pickup />
      <Hamburger :baseColor="'white'" />
      <Footer />
    </div>
  </div>
</template>

<script>
import HomeHeader from '~/components/home/HomeHeader.vue'
import News from '~/components/home/News.vue'
import Pickup from '~/components/home/Pickup.vue'
import Splash from '~/components/Splash.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'IndexPage',
  components: {
    HomeHeader,
    News,
    Pickup,
    Splash,
  },
  created() {
    this.changeSplashParam()
  },
  data() {
    return {
      showSplash: true,
    }
  },
  computed: {
    ...mapGetters(['firstLoad']),
  },
  methods: {
    closeSplash() {
      this.showSplash = false
    },
    ...mapMutations(['toggleFirstLoad', 'changeSplashParam']),
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
