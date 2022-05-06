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
  max-width: 1000px;
  max-height: 95%;
  background-color: $white;
  border-radius: $radius-sm;
  padding: 20px;
  display: grid;
  gap: 20px;
  align-items: center;
  overflow: scroll;

  @include mq(sm) {
    width: 80%;
    gap: 24px;
    height: auto;
    display: grid;
    padding: 24px;
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

  @include mq(lg) {
    padding: 32px;
  }
}
</style>
