<template>
  <header class="header">
    <BlackNavBar />
    <Hamburger :baseColor="`black`" v-show="!hideHamburger" />
    <div class="container">
      <h1
        class="page-title fadeIn animation-1"
        :class="{ 'has-description': hasDescription }"
        v-if="this.$slots['page-title']"
      >
        <slot name="page-title"></slot>
      </h1>
      <h1
        v-if="this.$slots['no-animation-page-title']"
        class="page-title"
        :class="{ 'has-description': hasDescription }"
      >
        <slot name="no-animation-page-title"></slot>
      </h1>
      <p class="description fadeIn animation-2">
        <slot name="description"></slot>
      </p>
      <div class="fadeIn animation-2">
        <slot name="custom"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    hasDescription() {
      return this.$slots['description'] !== undefined
    },
  },
  props: {
    hideHamburger: {
      type: Boolean,
    },
  },
}
</script>

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
    margin-bottom: 64px;
  }

  @include mq() {
    margin-bottom: 80px;
    padding-top: 48px;
  }
}

.page-title {
  color: $black;
  font-family: 'Zen Antique';
  text-align: left;

  span {
    color: $primary;
  }

  @include mq() {
    margin-top: 140px;
  }

  &.has-description {
    margin-bottom: 32px;

    @include mq(sm) {
      margin-bottom: 48px;
    }
  }
}

.description {
  color: $black;
  text-align: left;
  font-size: 16px;

  @include mq() {
    font-size: 20px;
  }
}
</style>
