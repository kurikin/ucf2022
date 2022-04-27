<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title> ス<span>タ</span>ジオ紹介 </template>
      <template v-slot:description
        >都市社会共生学科では２年次以降、<br class="--show-over-sm" />
        興味のある分野を選択し、専門性を持って取り組めるカリキュラムになっています。<br
          class="--show-over-sm"
        />
        以下の4種類のスタジオを大学2年生から2つ選択し、<br
          class="--show-over-sm"
        />
        その後の研究や卒業論文を執筆するゼミを決定していきます。</template
      >
    </WhiteHeader>
    <AnalyzeButton />
    <Studio />
  </div>
</template>

<script>
import WhiteHeader from '../components/WhiteHeader.vue'
import AnalyzeButton from '../components/intro/AnalyzeButton.vue'
import Studio from '../components/intro/Studio.vue'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true, // 最終ページの次にまた1枚目が表示される
      },
    }
  },
  components: { WhiteHeader, AnalyzeButton, Studio },
}
</script>

<style lang="scss" scoped>
.spacing {
  height: 100vh;
}
.slide {
  font-size: 60px;
}
.--show-over-sm {
  display: none;

  @include mq(xs) {
    display: block;
  }
}
</style>
