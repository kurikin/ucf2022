<template>
  <div class="event-tile">
    <div class="title-box">
      <h2 class="title">ソーシャルビジネス最前線</h2>
      <h3 class="subtitle">〜 お散歩プレイリスト 〜</h3>
    </div>
    <div class="icon-box">
      <img src="/icons/nomareru.svg" alt="" class="icon" />
      <img src="/icons/on-demand.svg" alt="" class="icon" />
    </div>
    <img src="/comingsoon.jpeg" alt="" class="thumbnail" />
    <p class="description">
      散歩のとき、通学のとき、帰省のとき……様々な足跡、足音を音楽と結び付けて共有する企画です。都市文化祭テーマである「雑踏」などからあなたが自由に連想した曲をアンケートから教えてください。Spotifyにてプレイリスト化します。
    </p>
    <div class="button-box">
      <button class="action-button">ボタン1</button>
      <button class="action-button">ボタン2</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.event-tile {
  display: grid;
  align-items: center;
  background-color: $white;
  width: 100%;
  border-radius: $radius-sm;
  padding: 16px 16px;
  gap: 16px;
}

.title-box {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .title {
    color: $black;
    letter-spacing: 1px;
    font-size: 24px;
  }

  .subtitle {
    color: $black;
    letter-spacing: 0.5px;
    font-size: 18px;
  }
}

.icon-box {
  display: flex;
  gap: 12px;

  .icon {
    height: 32px;
  }
}

.button-box {
  display: flex;
  gap: 20px;
}

.action-button {
  display: inline-block;
  color: $white;
  font-size: 18px;
  font-weight: 700;
  background-color: $primary;
  border-radius: 28px;
  padding: 8px 28px;
  border: none;
  letter-spacing: 2px;

  @include mq(sm) {
    padding: 10px 24px;
  }

  @include mq() {
    font-size: 20px;
    padding: 10px 48px;
    border-radius: 32px;
  }
}

.thumbnail {
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  border-radius: $radius-sm;
}

.description {
  font-size: 16px;
}
</style>
