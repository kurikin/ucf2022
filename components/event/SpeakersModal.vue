<template>
  <BaseModal :modalOpen="modalOpen">
    <div class="modal-content">
      <h1 class="eventName">都市科学部４学科対談</h1>
    </div>
  </BaseModal>
</template>

<script>
export default {
  props: ['eventName', 'speakers', 'modalOpen'],
}
</script>

<style lang="scss" scoped>
.modal-content {
  display: grid;
  gap: 20px;
  overflow: scroll;

  @include mq(sm) {
    gap: 24px;
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
}
</style>
