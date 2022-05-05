<template>
  <div class="overlay">
    <div class="content" v-scroll-lock="modalOpen">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
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
</style>
