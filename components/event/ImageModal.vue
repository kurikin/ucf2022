<template>
  <BaseModal :modalOpen="modalOpen">
    <img class="image" :src="imageModalData.image.url" alt="" />
    <button class="close-modal-button" @click="closeImageModal">
      <span class="close-text">閉じる</span
      ><img class="close-icon" src="/close.svg" alt="" />
    </button>
  </BaseModal>
</template>

<script>
import BaseModal from '~/components/BaseModal.vue'

export default {
  components: { BaseModal },
  props: {
    modalOpen: {
      type: Boolean,
      default: false,
    },
    imageModalData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    closeImageModal() {
      this.$emit('closeImageModal')
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 24px;
  object-fit: cover;
}
</style>
