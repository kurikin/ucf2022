<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title>ス<span>タ</span>ジオ診断</template>
      <template v-slot:description
        >スタジオ？？よく分からない！！<br />
        そんなあなたにぴったりのスタジオをご紹介します。<br />
        ​まだ見ぬ世界に出会えるかも…！？</template
      >
    </WhiteHeader>
    <div class="container">
      <div class="background">
        <nuxt-link
          class="primary-button analyze-start"
          to="/studios/analyze/questions/1"
        >
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
export default {
  components: { WhiteHeader, Footer },
}
</script>

<style lang="scss" scoped>
.analyze-start {
  @include mq() {
    font-size: 24px;
  }
}

.primary-button {
  @include mq() {
    padding: 12px 48px;
  }
}

.background {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: 150px;
  border-radius: $radius-xs;

  @include mq(sm) {
    height: 200px;
    border-radius: $radius-sm;
  }

  @include mq() {
    height: 250px;
  }

  @include mq(lg) {
    height: 350px;
  }
}

.container {
  margin-bottom: 24px;

  @include mq() {
    margin-bottom: 40px;
  }

  @include mq(lg) {
    margin-bottom: 64px;
  }
}
</style>
