<template>
  <header class="header">
    <WhiteNavBar />
    <Hamburger :baseColor="'white'" />
    <div class="container">
      <h1 class="page-title">
        <slot></slot>
      </h1>
    </div>
  </header>
</template>

<script></script>

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
}

.page-title {
  margin-top: 80px;
  font-size: 36px;
  color: $white;

  span {
    color: $primary;
  }

  @include mq(sm) {
    font-size: 52px;
  }

  @include mq() {
    font-size: 72px;
    margin-top: 200px;
  }
}

@include mq(sm) {
  .header {
    height: 300px;
    margin-bottom: 48px;
  }
}

@include mq(md) {
  .header {
    height: 500px;
  }
}
</style>
