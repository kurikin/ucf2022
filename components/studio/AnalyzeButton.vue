<template>
  <div class="container">
    <nuxt-link class="button-container" to="/studios/analyze/">
      <div class="message hide-over-xs">あなたにぴったりのスタジオは？</div>
      <div class="message show-over-xs">
        あなたにぴったりのスタジオが分かっちゃう！？
      </div>
      <div class="title-box">
        <div class="title">スタジオ診断</div>
        <img src="/icons/right-arrow-white.svg" alt="" class="right-arrow" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
//  - Font sizes (px)
//  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 10px;
  gap: 6px;
  border-radius: 24px;

  &:visited,
  &:link {
    color: $white;
    background-color: $secondary;
  }

  @include mq(sm) {
    flex-direction: row;
    justify-content: space-around;
    border-radius: 36px;
  }

  @include mq() {
    padding: 16px 20px;
    border-radius: 48px;
    justify-content: center;
    gap: 48px;
  }

  @include mq(lg) {
    gap: 80px;
  }
}

.message {
  font-size: 14px;
  padding: 4px 0;
  border-top: 1px solid $white;
  border-bottom: 1px solid $white;

  @include mq() {
    font-size: 18px;
  }

  @include mq(lg) {
    font-size: 22px;
    border-top: 1.5px solid $white;
    border-bottom: 1.5px solid $white;
  }
}

.title-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 4px;
  flex: 1;

  @include mq() {
    font-size: 24px;
    letter-spacing: 4px;
  }

  @include mq(lg) {
    font-size: 30px;
    letter-spacing: 6px;
  }
}

.right-arrow {
  height: 20px;
  width: 20px;
  display: block;

  @include mq() {
    height: 24px;
    width: 24px;
  }

  @include mq(lg) {
    height: 30px;
    width: 30px;
  }
}
</style>
