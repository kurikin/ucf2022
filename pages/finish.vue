<template>
  <div class="black-background">
    <transition name="splash-fade">
      <Splash v-if="showSplash && firstLoad" />
    </transition>
    <HomeHeader />
    <div class="content">
      <section class="thanks container">
        <h2 class="section-heading">ご参加ありがとうございました</h2>
        <div class="text-box">
          <p class="text">
            都市文化祭2022は無事終了いたしました。<br class="show-over-sm" />
            大変多くのご参加、ありがとうございました。
          </p>
          <p class="text">
            オンデマンド企画およびライブ配信企画のアーカイブは、<br
              class="show-over-sm"
            />
            引き続き企画一覧ページからご覧いただけます。
          </p>
        </div>
        <nuxt-link class="primary-button" to="/events/"
          >アーカイブを見る</nuxt-link
        >
      </section>
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
import { mapState, mapMutations } from 'vuex'
import { startObserve } from '~/scripts/observe'
import YouTubeLive from '~/components/home/YouTubeLive.vue'

export default {
  name: 'IndexPage',
  components: {
    HomeHeader,
    News,
    Pickup,
    Splash,
    YouTubeLive,
    TimeTable,
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

<style lang="scss" scoped>
.thanks {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @include mq() {
    gap: 24px;
    margin-bottom: 38px;
  }
}
.text {
  display: grid;
  gap: 24px;
  color: $white;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  font-weight: 400;

  @include mq(sm) {
    font-size: 20px;
  }

  @include mq() {
    font-size: 24px;
  }

  @include mq(lg) {
    line-height: 1.7;
  }
}
</style>
