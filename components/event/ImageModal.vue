<template>
  <BaseModal :modalOpen="imageModalOpen">
    <div class="modal-content">
      <img class="image" :src="imageModalData.image.url" alt="" />
      <button class="close-modal-button" @click="toggleImageModal">
        <span class="close-text">閉じる</span
        ><img class="close-icon" src="/icons/close.svg" alt="" />
      </button>
      <div class="image-info-box">
        <div class="nickname-box">
          <img src="/icons/person.svg" alt="" class="leading-icon" />
          <p class="nickname">{{ imageModalData.nickname }}</p>
        </div>
        <div class="location-box">
          <img src="/icons/location.svg" alt="" class="leading-icon" />
          <p class="location">{{ imageModalData.location }}</p>
        </div>
      </div>
      <p v-if="'comment' in imageModalData" class="comment">
        {{ imageModalData.comment }}
      </p>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from '~/components/BaseModal.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['imageModalOpen', 'imageModalData']),
  },
  methods: {
    ...mapMutations(['toggleImageModal']),
  },
  components: { BaseModal },
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  aspect-ratio: 7 / 5;
  border-radius: 24px;
  object-fit: cover;

  @include mq() {
    grid-column: 1 / -1;
    grid-row: 1;
    width: 78%;
  }
}

.image-info-box {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @include mq(sm) {
    grid-column: 1 / -1;
    flex-direction: row;
    gap: 20px;
  }

  @include mq() {
    gap: 32px;
  }
}

.leading-icon {
  height: 20px;

  @include mq() {
    height: 24px;
  }
}

.nickname-box,
.location-box {
  display: flex;
  gap: 8px;
  align-items: center;
}

.nickname,
.location,
.comment {
  color: $black;
  font-size: 16px;

  @include mq() {
    font-size: 20px;
  }
}

.comment {
  grid-column: 1 / -1;
}

.modal-content {
  display: grid;
  gap: 20px;
  overflow: scroll;

  @include mq(sm) {
    gap: 24px;
    align-items: start;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  @include mq() {
    column-gap: 32px;
    row-gap: 32px;
    align-items: flex-start;
    grid-template-columns: 60fr 40fr;
  }
}
</style>
