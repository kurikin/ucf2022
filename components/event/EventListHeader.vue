<template>
  <div class="event-list-header">
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
.event-list-header {
  margin-bottom: 48px;

  @include mq() {
    margin-bottom: 80px;
  }
}

.title {
  color: $white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;

  @include mq(sm) {
    font-size: 30px;
  }

  @include mq() {
    letter-spacing: 1px;
  }
}

.theme-select,
.icon-info {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include mq(sm) {
    gap: 28px;
  }

  @include mq(lg) {
    flex-direction: row;
    gap: 64px;
    align-items: center;
  }
}

.button-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @include mq(sm) {
    gap: 24px;
  }

  @include mq() {
    gap: 32px;
  }

  @include mq(lg) {
    grid-template-columns: repeat(4, 1fr);
    flex: 1;
    gap: 24px;
  }
}

.theme-button {
  font-size: 18px;
  color: $white;
  background-color: $secondary;
  font-weight: 600;
  padding: 8px 20px;
  border: none;
  border-radius: 32px;

  @include mq(sm) {
    padding: 10px 20px;
    font-size: 20px;
  }

  &.selected {
    color: $secondary;
    background-color: $white;
  }
}

.divider {
  height: 1px;
  width: 100%;
  background-color: $white;
  margin: 30px auto;

  @include mq() {
    margin: 36px auto;
  }
}

.icon-list {
  display: flex;
  gap: 20px;

  @include mq(lg) {
    flex: 1;
    justify-self: center;
  }
}

.icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;

  @include mq(sm) {
    gap: 12px;
  }

  .icon {
    width: 100%;
    max-width: 150px;
  }

  .name {
    color: $white;
    font-size: 16px;

    @include mq(sm) {
      font-size: 20px;
    }
  }
}
</style>
