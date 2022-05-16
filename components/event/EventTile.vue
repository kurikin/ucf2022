<template>
  <div class="event-tile">
    <div class="title-box">
      <h2 class="title">{{ eventData.title }}</h2>
      <h3 v-if="eventData.hasSubtitle" class="subtitle">
        {{ eventData.subtitle }}
      </h3>
    </div>
    <div class="icon-box">
      <img :src="'/icons/' + eventData.theme + '.svg'" alt="" class="icon" />
      <img :src="'/icons/' + eventData.format + '.svg'" alt="" class="icon" />
    </div>
    <img :src="'/events/' + eventData.thumbnail" alt="" class="thumbnail" />
    <p class="description">
      {{ eventData.description }}
    </p>
    <div class="button-box">
      <button class="action-button">ボタン1</button>
      <button class="action-button">ボタン2</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    eventData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.event-tile {
  display: grid;
  align-items: center;
  background-color: $white;
  width: 100%;
  border-radius: $radius-sm;
  padding: 20px;
  gap: 24px;

  @include mq(sm) {
    padding: 24px;
  }

  @include mq() {
    grid-template-columns: 1fr auto;
    column-gap: 24px;
    row-gap: 48px;
    border-radius: $radius-md;
    padding: 32px;
  }

  @include mq(lg) {
    grid-template-columns: 1.2fr 1fr auto;
    column-gap: 48px;
    row-gap: 32px;
  }
}

.title-box {
  display: flex;
  flex-direction: column;
  gap: 4px;

  @include mq(lg) {
    flex-direction: row;
    gap: 12px;
    align-items: baseline;
    grid-column: 1 / 3;
    grid-row: 1;
  }

  .title {
    color: $black;
    letter-spacing: 1px;
    font-size: 24px;

    @include mq(sm) {
      font-size: 30px;
    }

    @include mq() {
      font-size: 36px;
      letter-spacing: 2px;
    }
  }

  .subtitle {
    color: $black;
    letter-spacing: 0.5px;
    font-size: 18px;

    @include mq(sm) {
      font-size: 20px;
    }

    @include mq() {
      font-size: 24px;
    }
  }
}

.icon-box {
  display: flex;
  gap: 12px;

  @include mq(sm) {
    gap: 16px;
  }

  @include mq() {
    justify-self: end;
    grid-row: 1;
    grid-column: 2;
  }

  @include mq(lg) {
    grid-row: 1;
    grid-column: 3;
    // タイトルとアイコンの間隔を詰める
    margin-left: -32px;
  }

  .icon {
    height: 34px;

    @include mq(sm) {
      height: 36px;
    }

    @include mq() {
      height: 38px;
    }
  }
}

.button-box {
  display: flex;
  gap: 20px;
  grid-column: 1 / -1;

  @include mq(lg) {
    grid-row: 3;
    grid-column: 2 / 4;
    gap: 48px;
    align-self: flex-end;
  }
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

  @include mq(xs) {
    flex: 1;
  }

  @include mq(sm) {
    padding: 10px 24px;
    flex: 1;
  }

  @include mq() {
    font-size: 20px;
    padding: 10px 64px;
    border-radius: 32px;
  }
}

.thumbnail {
  width: 100%;
  aspect-ratio: 5 / 3;
  object-fit: cover;
  border-radius: $radius-sm;

  @include mq() {
    grid-column: 1 / -1;
  }

  @include mq(lg) {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    aspect-ratio: 4 / 3;
  }
}

.description {
  font-size: 16px;

  @include mq(sm) {
    font-size: 18px;
  }

  @include mq() {
    grid-column: 1 / -1;
    font-size: 20px;
    line-height: 1.6;
  }

  @include mq(lg) {
    grid-column: 2 / 4;
    grid-row: 2;
    align-self: flex-start;
  }
}
</style>