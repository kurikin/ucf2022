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
    <div class="content container">
      <img src="/uramichi/campus.png" alt="" class="campus-img" />
      <div class="videos grid">
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
    <Footer />
  </div>
</template>

<script>
import { videos } from '~/assets/constants/uramichi'

export default {
  computed: {
    videos() {
      return videos
    },
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
  margin-bottom: 8px;
}

.place-name {
  font-size: 18px;
  font-weight: 500;
}

.uramichi-pin {
  height: 32px;
}
</style>
