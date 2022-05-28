<template>
  <div class="container">
    <div class="grid image-gallery fadeIn animation-3">
      <img
        v-for="content in contents"
        class="image"
        :src="content.image.url + '?w=1000'"
        :key="content.id"
        @click="showModal(content)"
        alt=""
        v-lazy-load
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['contents'],
  methods: {
    showModal(content) {
      this.setImageModalData(content)
      this.toggleImageModal()
    },
    ...mapMutations(['toggleImageModal', 'setImageModalData']),
  },
}
</script>

<style lang="scss" scoped>
.image-gallery {
  margin-top: 48px;

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
