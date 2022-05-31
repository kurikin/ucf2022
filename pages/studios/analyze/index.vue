<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>ス<span>タ</span>ジオ診断</template>
      <template v-slot:description
        >スタジオ？？よく分からない！！<br />
        そんなあなたにぴったりのスタジオをご紹介します。<br />
        ​まだ見ぬ世界に出会えるかも…！？</template
      >
    </WhiteHeader>
    <div class="no-margin-content container">
      <div class="analyze-background fadeIn animation-3">
        <nuxt-link class="analyze-button" to="/studios/analyze/questions/1">
          スタジオ診断を始める！
        </nuxt-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import WhiteHeader from '~/components/WhiteHeader.vue'
import Footer from '~/components/Footer.vue'
import { startObserve } from '~/scripts/observe'

export default {
  head() {
    return {
      title: 'スタジオ診断 | 都市文化祭2022',
    }
  },
  components: { WhiteHeader, Footer },
  mounted() {
    startObserve()
  },
}
</script>

<style lang="scss" scoped>
.analyze-button {
  display: block;
  margin: 0 auto;
  color: $white;
  font-size: 18px;
  font-weight: 700;
  background-color: $primary;
  border-radius: 24px;
  padding: 10px 24px;
  border: none;
  letter-spacing: 2px;
  text-align: center;

  @include mq(xs) {
    font-size: 20px;
  }

  @include mq() {
    font-size: 24px;
    padding: 12px 64px;
    border-radius: 32px;
  }
}

.no-margin-content {
  display: flex;
  flex-direction: column;
}
</style>
