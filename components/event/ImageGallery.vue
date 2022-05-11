<template>
  <div class="container">
    <div class="grid image-gallery">
      <img
        v-for="(content, index) in contents"
        @click="showImageModal(index)"
        class="image"
        :src="content.image.url"
        :key="content.id"
        alt=""
        v-lazy-load
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['contents'],
  methods: {
    showImageModal(index) {
      this.$emit('showImageModal', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.image-gallery {
  margin-top: 48px;
  margin-bottom: 48px;

  @include mq(lg) {
    margin-top: 80px;
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
  border-radius: 24px;
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;
  border-radius: $radius-sm;

  @include mq() {
    border-radius: $radius-md;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
