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
      <div class="center-line fadeUp animation-3"></div>
      <AnalyzeButton class="fadeUp animation-3" />
      <div class="studio-container">
        <!-- Fade up animation index 4 ~ 7 -->
        <StudioSlider
          v-for="(studios, index) in allStudios"
          :key="index"
          :index="index"
          :studios="studios"
          :animationNum="index + 4"
        />
      </div>
      <AnalyzeButton class="fadeUp animation-8" />
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
import { allStudios } from '@/assets/constants/studio'
import StudioModal from '~/components/studio/StudioModal.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    allStudios() {
      return allStudios
    },
    ...mapState(['studioModalOpen']),
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
