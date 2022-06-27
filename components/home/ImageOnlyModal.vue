<template>
  <BaseModal :modalOpen="imageOnlyModalOpen">
    <div class="modal-content" v-scroll-lock="imageOnlyModalOpen">
      <img
        :src="imageOnlyModalData.image.url + '?w=1000'"
        alt=""
        class="image"
      />
      <button class="close-modal-button" @click="toggleImageOnlyModal">
        <span class="close-text">閉じる</span
        ><img class="close-icon" src="/icons/close.svg" alt="" />
      </button>
    </div>
  </BaseModal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  mounted() {
    console.log(this.imageOnlyModalData)
  },
  computed: {
    ...mapState(['imageOnlyModalOpen', 'imageOnlyModalData']),
  },
  methods: {
    ...mapMutations(['toggleImageOnlyModal']),
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  border-radius: 24px;
  object-fit: cover;

  @include mq() {
    grid-column: 1;
    grid-row: 1;
    width: 95%;
  }
}

.modal-content {
  display: grid;
  gap: 20px;
  overflow-y: scroll;

  @include mq(sm) {
    gap: 24px;
  }

  @include mq() {
    grid-template-columns: 1fr auto;
    gap: 32px;
  }
}

.close-modal-button {
  @include mq(sm) {
    align-self: flex-start;
  }
}
</style>
