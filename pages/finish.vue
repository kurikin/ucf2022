<template>
  <div class="black-background">
    <transition name="splash-fade">
      <Splash v-if="showSplash && firstLoad" />
    </transition>
    <HomeHeader />
    <div class="content">
      <Thanks />
      <Survey />
      <ImageGallery />
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
import TimeTable from '~/components/home/TimeTable.vue'
import Thanks from '~/components/finish/Thanks.vue'
import Survey from '~/components/finish/Survey.vue'
import { mapState, mapMutations } from 'vuex'
import { startObserve } from '~/scripts/observe'
import YouTubeLive from '~/components/home/YouTubeLive.vue'
import ImageGallery from '~/components/finish/ImageGallery.vue'

export default {
  components: {
    HomeHeader,
    News,
    Pickup,
    Splash,
    YouTubeLive,
    TimeTable,
    ImageGallery,
    Thanks,
    Survey,
  },
  created() {
    this.changeSplashParam()
  },
  mounted() {
    startObserve()
    this.$nextTick(function () {
      setTimeout(() => {
        this.showSplash = false
        this.toggleFirstLoad()
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
