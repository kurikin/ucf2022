<template>
  <nuxt-link class="button-container" to="#">
    <div class="message">あなたにぴったりのスタジオが分かっちゃう！？</div>
    <div class="title">スタジオ診断</div>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;

  &:visited,
  &:link {
    color: $white;
  }

  &:hover,
  &:active {
  }
}
</style>
