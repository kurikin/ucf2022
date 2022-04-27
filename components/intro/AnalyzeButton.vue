<template>
  <div class="container">
    <nuxt-link class="button-container" to="#">
      <div class="message">あなたにぴったりのスタジオが分かっちゃう！？</div>
      <div class="title-box">
        <div class="title">スタジオ診断</div>
        <img src="right_arrow.svg" alt="" class="right-arrow" />
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
  padding: 16px 20px;
  align-items: center;
  gap: 8px;

  &:visited,
  &:link {
    color: $white;
    background-color: $secondary;
    border-radius: 32px;
  }

  &:hover,
  &:active {
  }

  @include mq(sm) {
    flex-direction: row;
    justify-content: space-around;
  }
}

.message {
  font-size: 14px;
  padding: 4px 0;
  border-top: 1px solid $white;
  border-bottom: 1px solid $white;
}

.title-box {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
}

.title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}
.right-arrow {
  height: 40px;
  color: $white;
}
</style>
