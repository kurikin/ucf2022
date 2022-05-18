<template>
  <div class="white-background">
    <WhiteHeader :hideHamburger="studioModalOpen">
      <template v-slot:page-title>ス<span>タ</span>ジオ紹介</template>
      <template v-slot:description
        >都市社会共生学科では２年次以降、<br class="show-over-sm" />
        興味のある分野を選択し、専門性を持って取り組めるカリキュラムになっています。<br
          class="show-over-sm"
        />
        以下の４種類のスタジオを大学２年生から２つ選択し、<br
          class="show-over-sm"
        />
        その後の研究や卒業論文を執筆するゼミを決定していきます。</template
      >
    </WhiteHeader>
    <div class="content">
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
      <StudioModal v-show="studioModalOpen" />
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
  components: { WhiteHeader, AnalyzeButton, StudioSlider, StudioModal },
}
</script>

<style lang="scss" scoped>
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
