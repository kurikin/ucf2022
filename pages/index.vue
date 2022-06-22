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
import { mapState, mapMutations } from 'vuex'
import { startObserve } from '~/scripts/observe'
import HomeHeader from '~/components/home/HomeHeader.vue'
import Splash from '~/components/Splash.vue'
import Thanks from '~/components/home/Thanks.vue'
import Survey from '~/components/home/Survey.vue'
import Gallery from '~/components/home/Gallery.vue'
import SurveyFloat from '~/components/home/SurveyFloat.vue'
import MovieModal from '../components/home/MovieModal.vue'

export default {
  components: {
    HomeHeader,
    Splash,
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
