<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title> ス<span>タ</span>ジオ紹介 </template>
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
      <Studio :category="'cat1'" :data="studioInfo[0]">海外研究スタジオ</Studio>
      <Studio :category="'cat2'" :data="studioInfo[1]"
        >社会文化批評スタジオ</Studio
      >
      <Studio :category="'cat3'" :data="studioInfo[2]">社会分析スタジオ</Studio>
      <Studio :category="'cat4'" :data="studioInfo[3]">文化創成スタジオ</Studio>
    </div>
    <AnalyzeButton class="margin-bottom" />
    <Footer />
  </div>
</template>

<script>
import WhiteHeader from '../components/WhiteHeader.vue'
import AnalyzeButton from '../components/intro/AnalyzeButton.vue'
import Studio from '../components/intro/Studio.vue'
import { studioInfo } from '~/assets/studio-info'

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true, // 最終ページの次にまた1枚目が表示される
      },
      studioInfo: studioInfo,
    }
  },
  components: { WhiteHeader, AnalyzeButton, Studio, Studio },
  methods: {
    show() {
      this.$modal.show('modal-content')
    },
    hide() {
      this.$modal.hide('modal-content')
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
