<template>
  <BaseModal :modalOpen="modalOpen">
    <button class="close-modal-button" @click="closeApplyModal">
      <span class="close-text">閉じる</span
      ><img class="close-icon" src="/close.svg" alt="" /></button
  ></BaseModal>
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
    closeApplyModal() {
      this.$emit('closeApplyModal')
    },
  },
}
</script>

<style lang="scss" scoped></style>
