<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>優<span>し</span>さの街</template>
      <template v-slot:custom>
        <p class="page-subtitle">〜皆を支える都市基盤の魅力を伝える〜</p>
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
              <button v-if="data.hasButton" class="primary-button">
                {{ data.buttonText }}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import YasashisaLinks from '../../components/event/YasashisaLinks.vue'
import { dataList } from '~/assets/constants/yasashisa'
import Footer from '~/components/Footer.vue'

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
  components: { YasashisaLinks, Footer },
}
</script>

<style lang="scss" scoped>
.page-subtitle {
  font-family: 'Zen Antique';
  font-size: 20px;
  margin-top: -24px;
  text-align: left;

  @include mq(sm) {
    margin-top: -40px;
    font-size: 24px;
  }

  @include mq() {
    font-size: 30px;
    margin-top: -32px;
  }
}

.youtube-wrapper {
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 24px;

  @include mq(sm) {
    margin-bottom: 32px;
  }

  @include mq() {
    margin-bottom: 48px;
  }

  @include mq(lg) {
    margin-bottom: 64px;
  }

  .youtube {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

.about-header {
  display: grid;
  gap: 12px;
  margin-bottom: 24px;

  @include mq(sm) {
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 20px;
    margin-bottom: 32px;

    .description {
      grid-column: 1 / -1;
    }
  }

  @include mq() {
    margin-bottom: 80px;
    gap: 28px;
  }
}

.heading {
  font-size: 24px;
  color: $secondary;
  letter-spacing: 1.5px;

  @include mq(sm) {
    font-size: 30px;
  }

  @include mq() {
    font-size: 36px;
    letter-spacing: 3px;
  }

  @include mq(lg) {
    font-size: 44px;
    letter-spacing: 5px;
  }
}

.description {
  font-size: 16px;
  color: $black;
  line-height: 1.58;

  @include mq() {
    font-size: 18px;
  }

  @include mq(lg) {
    font-size: 20px;
  }
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include mq(sm) {
    gap: 48px;
  }

  @include mq() {
    gap: 64px;

    .description {
      grid-column: 1;
      grid-row: 2;
    }
  }
}

.activity-tile {
  display: grid;
  gap: 12px;

  @include mq(sm) {
    gap: 20px;
  }

  @include mq() {
    grid-template-columns: auto auto;
    grid-template-rows: auto 1fr;
    column-gap: 32px;
    row-gap: 12px;
    align-items: flex-start;
  }

  @include mq(lg) {
    column-gap: 80px;
    row-gap: 20px;
  }

  .activity-name {
    color: $black;
    font-size: 24px;
    letter-spacing: 4px;

    @include mq(sm) {
      font-size: 30px;
    }

    @include mq() {
      font-size: 36px;
      letter-spacing: 5px;
    }
  }

  .activity-img {
    width: 100%;

    @include mq() {
      grid-column: 2;
      grid-row: 1 / 4;
      width: 330px;
      aspect-ratio: 5 / 3;
      justify-self: flex-end;
    }

    @include mq(lg) {
      width: 360px;
    }
  }
}

.primary-button {
  margin-top: 16px;
  margin: 0;

  @include mq(sm) {
    padding: 10px 48px;
  }

  @include mq() {
    margin-top: 0;
    grid-row: 3;
    justify-self: flex-start;
  }
}
</style>
