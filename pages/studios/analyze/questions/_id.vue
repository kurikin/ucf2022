<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title>ス<span>タ</span>ジオ診断</template>
    </WhiteHeader>
    <div class="container">
      <div class="analyze-background">
        <div class="question-box">
          <h2 class="question-text">休日はどうやって過ごす？</h2>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.question-box {
  display: flex;
  flex-direction: column;
}

.question-text {
  color: $black;
  font-family: 'Zen Kaku Gothic New';
  font-size: 28px;
}
</style>
