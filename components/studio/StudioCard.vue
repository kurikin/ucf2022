<template>
  <div class="studio-card" @click="showModal">
    <img
      :src="'/teachers/' + studioData.englishName + '.jpeg'"
      alt=""
      class="teacher-img"
    />
    <div class="text-box">
      <p class="teacher-name">{{ studioData.teacherName }}</p>
      <p class="hashtags">
        <span
          v-for="hashtag in studioData.hashtags"
          :key="hashtag.teaherName"
          class="hashtag"
          >{{ hashtag }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    showModal() {
      this.setStudioModalData(this.studioData)
      this.toggleStudioModal()
    },
    ...mapMutations(['setStudioModalData', 'toggleStudioModal']),
  },
  props: {
    studioData: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.studio-card {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 8px;
  overflow: hidden;
  background-color: #fff;
  flex-direction: column;
  border-radius: $radius-sm;

  &:hover {
    cursor: pointer;
  }

  @include mq(sm) {
    border-radius: $radius-md;
  }
}

.text-box {
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  gap: 12px;
}

.teacher-img {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: $radius-sm;
  border-top-right-radius: $radius-sm;
  border-bottom-left-radius: $radius-xxs;
  border-bottom-right-radius: $radius-xxs;
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
  padding: 0 16px;

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
