<template>
  <div class="container">
    <div class="grid image-gallery">
      <img
        v-for="content in contents"
        @click="showImageModal(content)"
        class="image"
        :src="content.image.url"
        :key="content.id"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['contents'],
  methods: {
    showImageModal(content) {
      this.$emit('showImageModal', content)
    },
  },
}
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
  border-radius: 24px;
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;

  @include mq() {
    border-radius: $radius-md;
  }
}
</style>
