<template>
  <BaseModal :modalOpen="modalOpen">
    <h1 class="studio-name"></h1>
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
  },
  methods: {
    closeImageModal() {
      this.$emit('closeImageModal')
    },
  },
}
</script>

<style lang="scss" scoped></style>
