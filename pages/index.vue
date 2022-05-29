<template>
  <div class="black-background">
    <transition name="splash-fade">
      <Splash v-if="showSplash && firstLoad" />
    </transition>
    <HomeHeader />
    <div class="content">
      <News :contents="this.contents" />
      <Pickup />
      <Hamburger :baseColor="'white'" />
    </div>
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '~/components/home/HomeHeader.vue'
import News from '~/components/home/News.vue'
import Pickup from '~/components/home/Pickup.vue'
import Splash from '~/components/Splash.vue'
import { mapState, mapMutations } from 'vuex'
import { startObserve } from '~/scripts/observe'

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
  mounted() {
    this.$nextTick(function () {
      setTimeout(() => {
        this.showSplash = false
        this.toggleFirstLoad()
        startObserve('.fade-up-observe')
      }, 1400)
    })
  },
  data() {
    return {
      showSplash: true,
    }
  },
  computed: {
    ...mapState(['firstLoad']),
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
      queries: { limit: 20, orders: '-publishedAt' },
    })
    return data
  },
}
</script>

<style lang="scss" scoped></style>
