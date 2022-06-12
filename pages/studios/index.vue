<template>
  <div class="black-background">
    <BlackHeader :hideHamburger="studioModalOpen">
      <template v-slot:page-title>ス<span>タ</span>ジオ紹介</template>
      <template v-slot:description
        ><p>
          都市社会共生学科で最も特徴的な制度、スタジオ。<br />
          スタジオの中身を見ていくと、<br
            class="show-over-sm"
          />都市社会共生学科の全貌が 少しずつ見えてくるかもしれません。
        </p></template
      >
    </BlackHeader>
    <div class="content">
      <div class="center-line fade-up-observe"></div>
      <AnalyzeButton class="fade-up-observe" />
      <div class="studio-container">
        <StudioSlider
          v-for="(studios, index) in studiosByCategory"
          :key="index"
          :index="index"
          :studios="studios"
        />
      </div>
      <AnalyzeButton class="fade-up-observe" />
    </div>
    <transition name="component-fade">
      <StudioModal v-if="studioModalOpen" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import WhiteHeader from '@/components/WhiteHeader.vue'
import AnalyzeButton from '@/components/studio/AnalyzeButton.vue'
import StudioSlider from '~/components/studio/StudioSlider.vue'
import { studiosByCategory } from '@/assets/constants/studio'
import StudioModal from '~/components/studio/StudioModal.vue'
import { mapState, mapMutations } from 'vuex'
import { startObserve } from '~/scripts/observe'

export default {
  head() {
    return {
      title: 'スタジオ紹介 | 都市文化祭2022 公式ホームページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '都市社会共生学科で最も特徴的な制度、スタジオ。スタジオの中身を見ていくと、都市社会共生学科の全貌が少しずつ見えてくるかもしれません。',
        },
      ],
    }
  },
  mounted() {
    startObserve()
    window.addEventListener('keypress', this.onKeyPress)
  },
  beforeDestroy() {
    window.removeEventListener('keypress', this.onKeyPress)
  },
  computed: {
    studiosByCategory() {
      return studiosByCategory
    },
    ...mapState(['studioModalOpen']),
  },
  methods: {
    onKeyPress(event) {
      if (event.code === 'KeyM') {
        this.toggleStudioSecret()
      }
    },
    ...mapMutations(['toggleStudioSecret']),
  },
  components: {
    WhiteHeader,
    AnalyzeButton,
    StudioSlider,
    StudioModal,
  },
}
</script>

<style lang="scss" scoped>
.center-line {
  width: 1px;
  height: 100px;
  background-color: $white;
  margin: 32px auto;

  @include mq() {
    height: 250px;
    margin: 48px auto;
  }
}

.studio-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 48px;

  @include mq() {
    margin-bottom: 64px;
  }

  @include mq(lg) {
    margin-bottom: 96px;
  }
}

.slide {
  font-size: 60px;
}
</style>
