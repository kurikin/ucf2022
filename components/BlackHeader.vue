<template>
  <div>
    <header class="header">
      <WhiteNavBar />
      <Hamburger :baseColor="'white'" />
      <div class="container">
        <h1 class="page-title fadeIn animation-1">
          <slot name="page-title"></slot>
        </h1>
      </div>
    </header>
    <div class="description container fade-up-observe">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
import { startObserve } from '~/scripts/observe'

export default {
  mounted() {
    startObserve('.fade-up-observe')
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 250px;
  padding-top: 32px;
  text-align: center;
  margin-bottom: 16px;

  background: linear-gradient(
      to bottom,
      hsla(200, 100%, 11%, 1) 0,
      hsla(200, 100%, 11%, 0.82) 3%,
      hsla(200, 100%, 11%, 0.82) 92%,
      hsla(200, 100%, 11%, 1) 100%
    ),
    url('/header-back.jpg');
  background-position: center;

  @include mq(xs) {
    height: 270px;
  }

  @include mq(sm) {
    height: 300px;
    margin-bottom: 48px;
  }

  @include mq(md) {
    height: 500px;
  }
}

.page-title {
  margin-top: 80px;
  font-size: 36px;
  color: $white;
  letter-spacing: 2px;

  span {
    color: $primary;
  }

  @include mq(xs) {
    font-size: 44px;
  }

  @include mq(sm) {
    font-size: 52px;
  }

  @include mq() {
    font-size: 72px;
    margin-top: 200px;
  }
}

.description {
  display: grid;
  gap: 24px;
  color: $white;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
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
