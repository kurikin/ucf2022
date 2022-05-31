<template>
  <div class="white-background">
    <WhiteHeader class="upper-element">
      <template v-slot:page-title>お<span>問</span>合せ</template>
      <template v-slot:description
        >都市文化祭へのお問合せは、下記のGoogleフォームからお送りください。<br />
        送信後、自動返信メールが届きますのでご確認ください。
      </template>
    </WhiteHeader>
    <div class="no-margin-content container">
      <a
        href="https://forms.gle/RBgPe5KePytcmL5t8"
        class="primary-button fadeIn animation-2"
        target="_blank"
        >お問合せフォームはこちら</a
      >
      <img class="footprint fadeIn animation-2" src="/footprint.png" alt="" />
    </div>
    <Footer class="fade-in-observe" />
  </div>
</template>

<script>
import { startObserve } from '~/scripts/observe'
export default {
  head() {
    return {
      title: 'お問合せ | 都市文化祭2022',
    }
  },
  mounted() {
    startObserve()
  },
}
</script>

<style lang="scss" scoped>
.footprint {
  display: none;

  @include mq() {
    display: block;
    position: absolute;
    right: 50px;
    bottom: 0;
    transform: translateY(62px);
    height: 68vh;
  }

  @include mq(lg) {
    height: 74vh;
  }
}

.upper-element {
  z-index: 1;
}
</style>
