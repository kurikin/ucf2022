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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'n0dMgDM9OY0',
    }
  },
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
}

.youtube {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
