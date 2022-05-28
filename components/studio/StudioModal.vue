<template>
  <BaseModal :modalOpen="studioModalOpen">
    <div class="modal-content">
      <h1 class="studio-name">{{ studioModalData.lastName }}スタジオ</h1>
      <button class="close-modal-button" @click="closeModal">
        <span class="close-text">閉じる</span
        ><img class="close-icon" src="/icons/close.svg" alt="" />
      </button>
      <img
        :src="imageUrl(studioModalData)"
        alt=""
        class="studio-img image-fadeIn"
      />
      <p class="description" v-scroll-lock="studioModalOpen">
        {{ studioModalData.description }}
      </p>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from '~/components/BaseModal.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['studioModalData', 'studioModalOpen']),
    ...mapMutations(['setStudioModalData']),
  },
  methods: {
    closeModal() {
      this.toggleStudioModal()
    },
    imageUrl(studioData) {
      if (studioData.hasStudioImage) {
        return `/studios/${studioData.englishName}.jpeg`
      } else {
        return `/teachers/${studioData.englishName}.jpeg`
      }
    },
    ...mapMutations(['toggleStudioModal']),
  },
  components: { BaseModal },
}
</script>

<style lang="scss" scoped>
.modal-content {
  display: grid;
  gap: 24px;
  height: 100%;

  @include mq(sm) {
    gap: 28px;
    align-items: start;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  @include mq() {
    column-gap: 32px;
    row-gap: 32px;
    align-items: flex-start;
    grid-template-columns: 50fr 50fr;
  }
}
.studio-name {
  color: $black;
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 500;
  margin-top: -12px;

  @include mq(sm) {
    margin-top: 0;
  }

  @include mq() {
    letter-spacing: 5px;
    font-size: 36px;
    grid-column: 1 / -1;
    grid-row: 1;
  }

  @include mq(lg) {
    font-size: 44px;
  }
}

.studio-img {
  width: 100%;
  display: block;
  border-radius: 24px;
  aspect-ratio: 4 / 3;
  object-fit: cover;

  @include mq(sm) {
    grid-column: 1 / -1;
  }

  @include mq() {
    grid-column: 1;
    height: 400px;
  }
}

.description {
  color: $black;
  font-size: 16px;
  overflow: scroll;
  max-height: 200px;

  @include mq(sm) {
    grid-column: 1 / -1;
  }

  @include mq() {
    font-size: 18px;
    line-height: 1.6;
    grid-column: 2;
    max-height: 500px;
  }

  @include mq(lg) {
    font-size: 20px;
    line-height: 1.68;
  }
}
</style>
