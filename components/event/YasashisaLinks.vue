<template>
  <div class="sns observe-fade-in">
    <a class="sns-link" href="https://twitter.com/ynu_cvg" target="_blank">
      <img class="sns-logo" src="/logos/twitter-brown.svg" alt="" />
    </a>
    <a class="sns-link" href="https://instagram.com/ynu_cvg" target="_blank">
      <img class="sns-logo" src="/logos/instagram-brown.svg" alt="" />
    </a>
    <a class="sns-link" href="https://facebook.com/ynu.cvg" target="_blank">
      <img class="sns-logo" src="/logos/facebook-brown.svg" alt="" />
    </a>
  </div>
</template>

<script>
import { startObserve } from '~/scripts/observe'
export default {
  mounted() {
    startObserve('observe-fade-in')
  },
}
</script>

<style lang="scss" scoped>
.sns {
  display: flex;
  gap: 32px;
  grid-row: 1;
  justify-content: flex-end;
  margin-right: 12px;

  @include mq(sm) {
    grid-column: 2;
    margin-right: 0;
  }

  @include mq() {
    gap: 40px;
  }

  .sns-link {
    width: 24px;
    height: 24px;

    @include mq() {
      width: 28px;
      height: 28px;
    }

    @include mq(lg) {
      width: 32px;
      height: 32px;
    }
  }

  .sns-logo {
    width: 100%;
    height: 100%;
  }
}
</style>
