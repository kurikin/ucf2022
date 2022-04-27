<template>
  <div class="studio container">
    <h1 class="studio-name">海外研究スタジオ</h1>
    <div class="studio-card">
      <img src="comingsoon.jpeg" alt="" class="studio-img" />
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
.studio {
  margin-top: 24px;
}

.studio-name {
  color: $black;
  font-size: 24px;
  letter-spacing: 4px;
  font-weight: 500;
}

.studio-card {
  display: flex;
  width: 100%;
  overflow: hidden;
  margin-top: 24px;
  background-color: $white;
  flex-direction: column;
  border-radius: 24px;
  padding-bottom: 16px;
  gap: 12px;
}

.studio-img {
  width: 100%;
  border-bottom-left-radius: $radius-xs;
  border-bottom-right-radius: $radius-xs;
}

.teacher-name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: $black;
}

.hashtags {
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
}

.hashtag {
  color: $secondary;
}
</style>
