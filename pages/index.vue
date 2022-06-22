<template>
  <div class="black-background">
    <transition name="splash-fade">
      <Splash v-if="showSplash && firstLoad" />
    </transition>
    <transition name="component-fade">
      <MovieModal v-show="movieModalOpen" />
    </transition>
    <HomeHeader />
    <div class="content">
      <Thanks />
      <!-- <Survey /> -->
      <Gallery :contents="contents" />
      <Hamburger :baseColor="'white'" />
    </div>
    <SurveyFloat v-if="!showSplash && !movieModalOpen" />
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
import { mapState, mapMutations } from 'vuex'
import { startObserve } from '~/scripts/observe'
import YouTubeLive from '~/components/home/YouTubeLive.vue'
import Gallery from '~/components/finish/Gallery.vue'
import SurveyFloat from '~/components/finish/SurveyFloat.vue'
import MovieModal from '../components/finish/MovieModal.vue'

export default {
  components: {
    HomeHeader,
    News,
    Pickup,
    Splash,
    YouTubeLive,
    TimeTable,
    Gallery,
    Thanks,
    Survey,
    SurveyFloat,
    MovieModal,
  },
  created() {
    this.changeSplashParam()
  },
  mounted() {
    startObserve()
    if (!this.firstLoad) {
      this.showSplash = false
    }

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
    ...mapState(['firstLoad', 'movieModalOpen']),
  },
  methods: {
    closeSplash() {
      this.showSplash = false
    },
    ...mapMutations(['toggleFirstLoad', 'changeSplashParam']),
  },
  async asyncData({ $microcms }) {
    const images = await $microcms.get({
      endpoint: 'members',
      queries: {
        limit: 15,
      },
    })

    return images
  },
}
</script>

<style lang="scss" scoped></style>
