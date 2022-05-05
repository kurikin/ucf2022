<template>
  <BaseModal :modalOpen="modalOpen">
    <h1 class="studio-name">{{ lastName }}スタジオ</h1>
    <button class="close-modal-button" @click="closeModal">
      <span class="close-text">閉じる</span
      ><img class="close-icon" src="/close.svg" alt="" />
    </button>
    <img src="/comingsoon.jpeg" alt="" class="studio-img" />
    <p class="description">{{ studioData.description }}</p>
  </BaseModal>
</template>

<script>
import BaseModal from '../BaseModal.vue'
export default {
  props: {
    studioData: {
      type: Object,
    },
    modalOpen: {
      type: Boolean,
    },
  },
  computed: {
    lastName() {
      const teacherName = new String(this.studioData.teacherName)
      return teacherName.substring(0, teacherName.indexOf(' '))
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
  components: { BaseModal },
}
</script>

<style lang="scss" scoped>
//  - Font sizes (px)
//  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128

.studio-name {
  color: $black;
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 500;

  @include mq() {
    font-size: 36px;
  }
}

.close-modal-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  color: $white;
  border: none;
  background-color: $secondary;
  border-radius: 20px;
  justify-self: end;
  grid-row: 1;

  @include mq(sm) {
    grid-column: 2;
  }

  &:hover {
    cursor: pointer;
  }
}

.close-text {
  font-size: 14px;
  font-weight: 400;
}

.close-icon {
  width: 12px;
  height: 12px;
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
  }
}

.description {
  align-self: flex-start;
  color: $black;
  font-size: 16px;

  @include mq(sm) {
    grid-column: 1 / -1;
  }

  @include mq() {
    grid-column: 2;
  }
}
</style>
