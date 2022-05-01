<template>
  <div class="white">
    <WhiteHeader :hideHamburger="modalOpen">
      <template v-slot:page-title>ス<span>タ</span>ジオ紹介</template>
      <template v-slot:description
        >都市社会共生学科では２年次以降、<br class="show-over-sm" />
        興味のある分野を選択し、専門性を持って取り組めるカリキュラムになっています。<br
          class="show-over-sm"
        />
        以下の4種類のスタジオを大学2年生から2つ選択し、<br
          class="show-over-sm"
        />
        その後の研究や卒業論文を執筆するゼミを決定していきます。</template
      >
    </WhiteHeader>
    <AnalyzeButton />
    <div class="studio-container">
      <StudioSlider
        v-for="(studios, index) in allStudios"
        :key="index"
        @showModal="showModal"
        :index="index"
        :studios="studios"
      />
    </div>
    <AnalyzeButton class="margin-bottom" />
    <StudioModal
      v-show="modalOpen"
      @closeModal="closeModal"
      :studioData="modalData"
    />
    <Footer />
  </div>
</template>

<script>
import WhiteHeader from '@/components/WhiteHeader.vue'
import AnalyzeButton from '@/components/studio/AnalyzeButton.vue'
import StudioSlider from '~/components/studio/StudioSlider.vue'
import { allStudios } from '@/assets/constants'
import StudioModal from '~/components/studio/StudioModal.vue'

export default {
  data() {
    return {
      allStudios: allStudios,
      modalOpen: false,
      modalData: {},
    }
  },
  components: { WhiteHeader, AnalyzeButton, StudioSlider, StudioModal },
  methods: {
    showModal(studioData) {
      this.modalData = studioData
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.studio-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 92px;
}
.spacing {
  height: 100vh;
}
.slide {
  font-size: 60px;
}
</style>
