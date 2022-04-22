<template>
  <div>
    <Header>都<span>市</span>文化祭とは</Header>
    <div class="text-box container">
      <p class="slogan">
        「都市」を学び、<br />「都市」で学び、<br />「都市」と学ぶ。
      </p>
      <p class="description">
        あらゆるものが詰まった都市というフィールドで、<br />
        何を学び、何を考えるのかを、形にし、<br />
        発信していくイベントが都市文化祭です。<br />
      </p>
    </div>
    <Footer />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.text-box {
  display: grid;
  gap: 24px;
  color: $white;
  font-size: 16px;
  line-height: 1.7;
  text-align: center;
  font-weight: 400;
  margin-bottom: 48px;
}

@include mq(sm) {
  .text-box {
    font-size: 20px;
    margin-bottom: 100px;
  }
}

@include mq(md) {
  .text-box {
    font-size: 24px;
    gap: 32px;
  }
}
</style>
