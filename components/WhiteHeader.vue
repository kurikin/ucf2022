<template>
  <header class="header">
    <BlackNavBar />
    <Hamburger :baseColor="`black`" />
    <div class="container">
      <h1
        class="page-title"
        :class="[
          { 'has-second-slot': hasSecondSlot },
          { fadeIn: animatePageTitle },
          { 'animation-1': animatePageTitle },
        ]"
      >
        <slot name="page-title"></slot>
      </h1>
      <p class="description fadeIn animation-1">
        <slot name="description"></slot>
      </p>
      <div class="fadeIn animation-1">
        <slot name="custom"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    animatePageTitle: {
      type: Boolean,
      default: true,
    },
    hasSecondSlot: {
      type: Boolean,
      default: false,
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
    margin-bottom: 64px;
    padding-top: 64px;
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
    margin-top: 110px;
  }

  &.has-second-slot {
    margin-bottom: 32px;
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
