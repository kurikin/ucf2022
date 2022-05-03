<template>
  <div class="overlay">
    <div class="content" v-scroll-lock="modalOpen">
      <h1 class="studio-name">{{ lastName }}スタジオ</h1>
      <button class="close-modal-button" @click="closeModal">
        <span class="close-text">閉じる</span
        ><img class="close-icon" src="/close.svg" alt="" />
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
  width: 90%;
  height: 85%;
  max-width: 1000px;
  background-color: $white;
  border-radius: 24px;
  padding: 24px 28px;
  display: grid;
  gap: 20px;
  overflow: scroll;

  @include mq(sm) {
    gap: 24px;
  }

  @include mq(sm) {
    width: 80%;
    gap: 24px;
    height: auto;
    display: grid;
    padding: 32px;
    align-items: center;
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
