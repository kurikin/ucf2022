<template>
  <div class="studio-float">
    <img class="twitter-icon" src="/logos/twitter.svg" alt="" />
    <div class="text-box">
      <p class="title"><span>スクショ</span>を<span>ツイート</span>しよう！</p>
      <div class="hashtags">
        <span class="hashtag">#スタジオ診断</span>
        <span class="hashtag">#都市文化祭2022</span>
      </div>
    </div>
    <img src="/icons/close.svg" alt="" class="close-icon" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.studio-float {
  width: 94%;
  position: fixed;
  top: 100vh;
  transform: translate(3%, calc(-100% - 30px));

  z-index: 100;
  padding: 12px 20px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: $blue;

  @include mq(xs) {
    gap: 24px;
  }

  @include mq(sm) {
    display: none;
  }
}

.twitter-icon {
  height: 24px;
  width: 24px;
  display: inline-block;
}

.close-icon {
  height: 16px;
  width: 16px;
  display: inline-block;
}

.text-box {
  color: $white;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
}

.title {
  font-size: 14px;
  letter-spacing: 0.2px;

  span {
    font-weight: 600;
    font-size: 18px;
  }
}

.hashtags {
  display: flex;
  column-gap: 10px;
  flex-wrap: wrap;

  .hashtag {
    font-size: 14px;
  }
}
</style>
