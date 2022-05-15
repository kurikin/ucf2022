<template>
  <div>
    <div class="theme-select">
      <p class="title">サブテーマを選ぶ</p>
      <div class="button-list">
        <button class="theme-button selected">すべて</button>
        <button class="theme-button">のまれる</button>
        <button class="theme-button">たたずむ</button>
        <button class="theme-button">はぐれる</button>
      </div>
    </div>
    <div class="divider" />
    <div class="icon-info">
      <p class="title">アイコンの見方</p>
      <div class="icon-list">
        <div class="icon-box">
          <img src="/icons/youtube-white.svg" alt="" class="icon" />
          <p class="name">YouTubeライブ配信</p>
        </div>
        <div class="icon-box">
          <img src="/icons/f2f-white.svg" alt="" class="icon" />
          <p class="name">対面実施</p>
        </div>
        <div class="icon-box">
          <img src="/icons/on-demand-white.svg" alt="" class="icon" />
          <p class="name">オンデマンド</p>
        </div>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  color: $white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.theme-select {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.button-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.theme-button {
  font-size: 18px;
  color: $white;
  background-color: $secondary;
  font-weight: 600;
  padding: 8px 20px;
  border: none;
  border-radius: 24px;

  &.selected {
    color: $secondary;
    background-color: $white;
  }
}

.divider {
  height: 1px;
  width: 100%;
  background-color: $white;
  margin: 32px auto;
}

.icon-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.icon-list {
  display: flex;
  gap: 20px;
}

.icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;

  .icon {
    width: 100%;
  }

  .name {
    color: $white;
    font-size: 16px;
  }
}
</style>
