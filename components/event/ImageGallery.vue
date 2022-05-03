<template>
  <div class="container">
    <div class="grid image-gallery">
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
      <img class="image" src="/comingsoon.jpeg" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.image-gallery {
  margin-top: 32px;
  margin-bottom: 48px;

  @include mq() {
    margin-top: 48px;
  }
}

.grid {
  gap: 24px;

  @include mq(sm) {
    grid-template-columns: 1fr 1fr;
  }

  @include mq() {
    gap: 32px;
  }

  @include mq(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.image {
  width: 100%;
  border-radius: 24px;

  @include mq() {
    border-radius: $radius-md;
  }
}
</style>
