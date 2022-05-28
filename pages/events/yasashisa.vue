<template>
  <div>
    <WhiteHeader>
      <template v-slot:page-title>優<span>し</span>さの街</template>
      <template v-slot:custom>
        <p class="subtitle">〜皆を支える都市基盤の魅力を伝える〜</p>
      </template>
    </WhiteHeader>
    <div class="content">
      <div class="container">
        <div class="youtube-wrapper">
          <youtube
            :fitParent="true"
            ref="youtube"
            class="youtube"
            :video-id="videoId"
            :resize="true"
          ></youtube>
        </div>
        <section class="about">
          <div class="about-header">
            <h2 class="heading">「優しさの街」について</h2>
            <YasashisaLinks />
            <p class="description">
              「優しさの街」は、都市基盤学科の有志学生による団体です。SNSでの土木紹介やオープンキャンパスの実施を通して、普段土木に馴染みがない人にも土木の魅力を知ってもらいたい！そんな思いで活動しています。さらに、中高生に学生生活の様子を感じてもらいたい！との願いを実現すべく、現役の大学生の私たちだからこそできるフレッシュな発信を心がけています。
            </p>
          </div>
          <div class="activity-list">
            <div
              v-for="(data, index) in dataList"
              :key="index"
              class="activity-tile"
            >
              <h2 class="activity-name">{{ data.activityName }}</h2>
              <p class="description">
                {{ data.description }}
              </p>
              <img
                :src="'/yasashisa/' + (index + 1) + '.jpeg'"
                alt=""
                class="activity-img"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import YasashisaLinks from '../../components/event/YasashisaLinks.vue'
import { dataList } from '~/assets/constants/yasashisa'

export default {
  data() {
    return {
      videoId: 'n0dMgDM9OY0',
    }
  },
  computed: {
    dataList() {
      return dataList
    },
  },
  components: { YasashisaLinks },
}
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: 'Zen Antique';
  font-size: 20px;
  margin-top: -24px;
  text-align: left;

  @include mq() {
    margin-top: -32px;
  }
}

.youtube-wrapper {
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 24px;
}

.youtube {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.about-header {
  display: grid;
  gap: 12px;
  margin-bottom: 24px;
}

.heading {
  font-size: 24px;
  color: $black;
}

.description {
  font-size: 16px;
  color: $black;
  line-height: 1.58;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.activity-tile {
  display: grid;
  gap: 12px;

  .activity-name {
    color: $black;
    font-size: 24px;
    letter-spacing: 4px;
  }

  .activity-img {
    width: 100%;
  }
}
</style>
