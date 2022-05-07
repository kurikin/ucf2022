<template>
  <section class="slogan container">
    <p class="top-text">
      「都市」を学び、<br />「都市」で学び、<br />「都市」と学ぶ。
    </p>
    <p class="sub-text">
      あらゆるものが詰まった都市というフィールドで、<br />
      何を学び、何を考えるのかを、形にし、<br />
      発信していくイベントが都市文化祭です。<br />
    </p>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.slogan {
  display: grid;
  gap: 24px;
  color: $white;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 48px;
  font-weight: 400;

  @include mq(sm) {
    font-size: 20px;
  }

  @include mq() {
    font-size: 24px;
  }

  @include mq(lg) {
    line-height: 1.7;
  }
}
</style>
