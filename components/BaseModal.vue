<template>
  <div class="modal-overlay">
    <div class="modal-container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal-overlay {
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

.modal-container {
  width: 90%;
  max-width: 1030px;
  max-height: 95%;
  background-color: $white;
  border-radius: $radius-sm;
  padding: 20px;
  display: grid;
  align-items: center;

  @include mq(sm) {
    width: 85%;
    height: auto;
    padding: 24px;
  }

  @include mq() {
    width: 90%;
  }

  @include mq(lg) {
    padding: 32px;
  }
}
</style>
