<template>
  <header class="header">
    <BlackNavBar />
    <Hamburger :baseColor="`black`" />
    <div class="container">
      <h1 class="page-title">
        <slot name="page-title"></slot>
      </h1>
      <p class="description">
        <slot name="description"></slot>
      </p>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" scoped>
//  - Font sizes (px)
//  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128

.header {
  width: 100%;
  padding-top: 64px;
  text-align: center;
  margin-bottom: 32px;

  @include mq(sm) {
    margin-bottom: 48px;
  }

  @include mq() {
    margin-bottom: 64px;
  }
}

.page-title {
  font-size: 36px;
  color: $black;
  font-family: 'Zen Antique';
  text-align: left;
  font-weight: 400;
  margin-bottom: 32px;

  span {
    color: $primary;
  }

  @include mq(sm) {
    font-size: 52px;
    margin-bottom: 48px;
  }

  @include mq() {
    font-size: 72px;
    margin-top: 180px;
  }
}

.description {
  color: $black;
  text-align: left;
  font-size: 16px;

  @include mq() {
    font-size: 20px;
  }

  @include mq(lg) {
    font-size: 24px;
  }
}
</style>
