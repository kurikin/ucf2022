<template>
  <div class="white-background">
    <WhiteHeader :hasSecondSlot="true">
      <template v-slot:page-title>裏<span>道</span>探索</template>
      <template v-slot:description
        ><p>
          横浜国立大学には多くの道がある。<br />
          あなたの知らない楽しい道を誰かは知っているかもしれない。<br />
          裏道を通して横浜国立大学の新たな一面を探しにいきましょう。
        </p></template
      >
    </WhiteHeader>
    <div class="content">
      <div class="container">
        <img
          src="/uramichi/campus.png"
          alt=""
          class="campus-img fade-up-observe"
        />
        <div class="videos grid fade-up-observe">
          <div v-for="(video, index) in videos" :key="index" class="video">
            <div class="title-box">
              <img
                :src="'/uramichi/pin' + (index + 1) + '.png'"
                alt=""
                class="uramichi-pin"
              />
              <p class="place-name">{{ video.placeName }}</p>
            </div>
            <div class="iframe-wrapper">
              <iframe
                class="youtube"
                width="560"
                height="315"
                :src="video.url"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { videos } from '~/assets/constants/uramichi'
import { startObserve } from '~/scripts/observe'

export default {
  head() {
    return {
      title: '裏道探索 | 都市文化祭2022 公式ホームページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '横浜国立大学には多くの道がある。あなたの知らない楽しい道を誰かは知っているかもしれない。裏道を通して横浜国立大学の新たな一面を探しにいきましょう。',
        },
      ],
    }
  },
  computed: {
    videos() {
      return videos
    },
  },
  mounted() {
    startObserve()
  },
}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}
.campus-img {
  width: 100%;
  max-width: 750px;
  margin-bottom: 16px;

  @include mq() {
    margin-bottom: 32px;
  }

  @include mq(lg) {
    margin-bottom: 48px;
  }
}

.grid {
  gap: 24px;

  @include mq() {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @include mq(lg) {
    gap: 48px;
  }
}

.iframe-wrapper {
  margin: 0 auto;
  width: 100%;
  aspect-ratio: 16 / 9;

  .youtube {
    width: 100%;
    height: 100%;
  }
}

.title-box {
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;

  @include mq(sm) {
    gap: 16px;
    margin-bottom: 12px;
  }

  @include mq(lg) {
    gap: 20px;
    margin-bottom: 16px;
  }
}

.place-name {
  font-size: 18px;
  font-weight: 500;

  @include mq(sm) {
    font-size: 24px;
  }
}

.uramichi-pin {
  height: 32px;

  @include mq(sm) {
    height: 40px;
  }

  @include mq() {
    height: 48px;
  }
}
</style>
