<template>
  <div class="overlay">
    <div class="content">
      <h1 class="studio-name">{{ studioData.teacherName }} スタジオ</h1>
      <button class="close-modal-button" @click="closeModal">
        <span>閉じる</span><img class="close-icon" src="/close.svg" alt="" />
      </button>
      <img src="/comingsoon.jpeg" alt="" class="studio-img" />
      <p class="description">{{ studioData.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    studioData: {
      type: Object,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
//  - Font sizes (px)
//  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128

.overlay {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 55%;
  background-color: $white;
  border-radius: 24px;
  padding: 32px 32px;

  display: grid;
  grid-template-columns: 60fr 40fr;
  grid-auto-rows: auto auto;
  align-items: center;
  column-gap: 32px;
  row-gap: 32px;
}

.studio-name {
  color: $black;
  letter-spacing: 2px;
  font-size: 32px;
  font-weight: 500;
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

  &:hover {
    cursor: pointer;
  }
}

.studio-img {
  width: 100%;
  grid-column: 1;
  grid-row: 2;
  border-radius: 24px;
}

.description {
  grid-column: 2;
  grid-row: 2;
  align-self: flex-start;
  color: $black;
}

.close-icon {
  width: 12px;
  height: 12px;
}
</style>
