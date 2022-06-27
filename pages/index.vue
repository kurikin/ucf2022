<template>
  <div class="black-background">
    <transition name="splash-fade">
      <Splash v-if="showSplash && firstLoad" />
    </transition>
    <transition name="component-fade">
      <MovieModal v-if="movieModalOpen" />
    </transition>
    <HomeHeader />
    <div class="content">
      <Thanks />
      <!-- <Survey /> -->
      <img class="group-photo" src="group.jpg" alt="" />
      <Gallery :contents="contents" />
      <Hamburger :baseColor="'white'" />
      <transition name="component-fade">
        <ImageOnlyModal v-if="imageOnlyModalOpen" />
      </transition>
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
import ImageOnlyModal from '~/components/home/ImageOnlyModal.vue'

export default {
  components: {
    HomeHeader,
    Splash,
    Gallery,
    Thanks,
    Survey,
    SurveyFloat,
    MovieModal,
    ImageOnlyModal,
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
    ...mapState(['firstLoad', 'movieModalOpen', 'imageOnlyModalOpen']),
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
        limit: 50,
        orders: 'sortNum',
      },
    })

    return images
  },
}
</script>

<style lang="scss" scoped>
.group-photo {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  // aspect-ratio: 3 / 2;
  display: block;
  object-fit: cover;
  margin-bottom: 48px;
  border-radius: $radius-sm;

  @include mq() {
    border-radius: $radius-md;
  }

  @include mq() {
    margin-bottom: 64px;
  }

  @include mq(lg) {
    margin-bottom: 80px;
  }
}
</style>
