<template>
  <header class="header">
    <BlackNavBar />
    <Hamburger :baseColor="`black`" v-show="!hideHamburger" />
    <div class="container">
      <h1
        class="page-title fadeIn animation-1"
        :class="{ 'has-description': hasSecondSlot }"
        v-if="this.$slots['page-title']"
      >
        <slot name="page-title"></slot>
      </h1>
      <h1
        class="page-title"
        :class="{ 'has-description': hasDescription }"
        v-if="this.$slots['no-animation-page-title']"
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
    hasSecondSlot() {
      return (
        this.$slots['description'] !== undefined ||
        this.$slots['custom'] !== undefined
      )
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
