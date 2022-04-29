<template>
  <div class="studio-card">
    <img src="comingsoon.jpeg" alt="" class="studio-img" />
    <div class="text-box">
      <p class="teacher-name">小宮 正安</p>
      <p class="hashtags">
        <span class="hashtag">#オーストラリア</span
        ><span class="hashtag">#モーツァルト</span
        ><span class="hashtag">#中世ヨーロッパ</span
        ><span class="hashtag">#市民革命</span
        ><span class="hashtag">#市民台頭の歴史</span>
        <span class="hashtag">#ファッション</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
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
</style>
