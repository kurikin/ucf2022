<template>
  <div class="gallery container">
    <h2 class="section-heading">フォトギャラリー</h2>
    <div class="grid image-gallery">
      <img
        v-for="content in contents"
        class="image fade-in-observe"
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
      this.setImageOnlyModalData(content)
      this.toggleImageOnlyModal()
    },
    ...mapMutations(['toggleImageOnlyModal', 'setImageOnlyModalData']),
  },
}
</script>

<style lang="scss" scoped>
.image-gallery {
  margin-top: 48px;

  @include mq(lg) {
    margin-top: 64px;
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
