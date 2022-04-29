<template>
  <div class="studio-card" @click="showModal">
    <img src="comingsoon.jpeg" alt="" class="studio-img" />
    <div class="text-box">
      <p class="teacher-name">{{ data.teacherName }}</p>
      <p class="hashtags">
        <span
          v-for="hashtag in data.hashtags"
          :key="hashtag.teaherName"
          class="hashtag"
          >{{ hashtag }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$emit('showModal', this.data)
    },
    hideModal() {
      this.$modal.hide('modal-content')
    },
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped>
.studio-card {
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  flex-direction: column;
  border-radius: $radius-sm;

  @include mq(sm) {
    border-radius: $radius-md;
  }
}

.text-box {
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  gap: 12px;
}

.studio-img {
  width: 100%;
  border-bottom-left-radius: $radius-xxs;
  border-bottom-right-radius: $radius-xxs;

  @include mq(sm) {
  }
}

.teacher-name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  @include mq(sm) {
    font-size: 24px;
  }
}

.hashtags {
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;

  @include mq() {
    column-gap: 12px;
    row-gap: 4px;
  }
}

.hashtag {
  font-size: 16px;
  color: $secondary;

  @include mq() {
    font-size: 18px;
  }
}

.modal {
  height: 100vh;
  width: 100vh;
  position: fixed;
  z-index: 1000;
}
</style>
