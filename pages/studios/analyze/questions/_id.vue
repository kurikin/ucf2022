<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title>ス<span>タ</span>ジオ診断</template>
    </WhiteHeader>
    <div class="container">
      <div class="analyze-background">
        <div class="question-box short-choice">
          <h2 class="question-text">休日はどうやって過ごす？</h2>
          <div class="button-box">
            <nuxt-link class="choice-button" to="/">アウトドア</nuxt-link>
            <nuxt-link class="choice-button" to="/">インドア</nuxt-link>
          </div>
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
.question-text {
  color: $black;
  font-family: 'Zen Kaku Gothic New';
  font-size: 24px;
  text-align: center;
  font-weight: 600;

  @include mq(sm) {
    font-size: 30px;
  }

  @include mq() {
    font-size: 36px;
  }
}

.question-box.short-choice {
  display: flex;
  flex-direction: column;
  gap: 48px;

  @include mq() {
    gap: 96px;
  }

  .button-box {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include mq(sm) {
      flex-direction: row;
      gap: 48px;
    }

    @include mq() {
      gap: 64px;
    }

    @include mq(lg) {
      gap: 80px;
    }
  }
}
.choice-button {
  display: inline-block;
  margin: 0 auto;
  color: $white;
  font-size: 18px;
  font-weight: 500;
  background-color: $primary;
  border-radius: 24px;
  padding: 6px 24px;
  border: none;
  letter-spacing: 1px;
  min-width: 160px;
  text-align: center;

  @include mq(sm) {
    padding: 6px 24px;
    min-width: 230px;
  }

  @include mq() {
    font-size: 20px;
    padding: 10px 24px;
    border-radius: 32px;
    min-width: 320px;
  }
}
</style>
