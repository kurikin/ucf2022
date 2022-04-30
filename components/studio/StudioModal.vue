<template>
  <div class="overlay">
    <div class="content">
      <h1 class="studio-name">{{ studioData.teacherName }}</h1>
      <button class="close-modal-button" @click="closeModal">閉じる</button>
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
  height: 50%;
  width: 50%;
  background-color: $white;

  display: grid;
}
</style>
