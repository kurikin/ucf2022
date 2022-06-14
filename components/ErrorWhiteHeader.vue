<template>
  <header class="header">
    <BlackNavBar />
    <div class="container">
      <h1 class="page-title fadeIn animation-1">
        <slot name="page-title"></slot>
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
export default {}
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
  }
}

.page-title {
  color: $black;
  font-family: 'Zen Antique';
  text-align: left;
  margin-bottom: 32px;

  span {
    color: $primary;
  }

  @include mq(sm) {
    margin-bottom: 48px;
  }

  @include mq() {
    margin-top: 140px;
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
