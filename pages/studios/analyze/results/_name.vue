<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:no-animation-page-title
        >ス<span>タ</span>ジオ診断</template
      >
    </WhiteHeader>
    <div class="no-margin-content">
      <div class="container">
        <div class="analyze-background">
          <div class="result-box">
            <h2 class="title">診断結果</h2>
            <div class="result-text">
              <p class="leading">あなたにおすすめのスタジオは...</p>
              <h3 class="studio-name">{{ studioData.lastName }}スタジオ</h3>
            </div>
            <img
              class="teacher-img"
              :src="'/teachers/' + studioData.englishName + '.jpeg'"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStudioByName } from '~/assets/constants/studio'

export default {
  computed: {
    studioData() {
      return getStudioByName(this.name)[0]
    },
  },
  async asyncData({ params }) {
    const name = params.name
    return { name }
  },
}
</script>

<style lang="scss" scoped>
.result-box {
  display: grid;
  gap: 12px;
}

.title {
  font-size: 32px;
  color: $black;
  text-align: center;
  letter-spacing: 4px;
  margin-bottom: 20px;
}

.result-text {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .leading {
    font-size: 18px;
    color: $black;
    text-align: center;
    font-weight: 500;
  }

  .studio-name {
    font-family: 'Zen Kaku Gothic New';
    text-align: center;
    font-size: 30px;
    color: $primary;
    font-weight: 600;
  }
}

.teacher-img {
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
  border-radius: $radius-xs;
}
</style>
