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
    <div
      class="button-box"
      :class="{ 'one-button': !eventData.hasSecondButton }"
    >
      <button v-if="eventData.comingsoon" class="action-button disabled">
        {{ eventData.firstButtonData.text }}
      </button>
      <button
        v-else
        class="action-button"
        @click="buttonClicked(eventData.firstButtonData)"
      >
        {{ eventData.firstButtonData.text }}
      </button>
      <button
        class="action-button"
        @click="buttonClicked(eventData.secondButtonData)"
        v-if="eventData.hasSecondButton"
      >
        {{ eventData.secondButtonData.text }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    eventData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    buttonClicked(buttonData) {
      switch (buttonData.type) {
        case 'modal':
          this.setSpeakersModalData({
            eventName: this.eventData.title,
            speakers: this.eventData.speakers,
          })
          this.toggleSpeakersModal()
          break
        case 'link':
          window.open(buttonData.link, '_blank')
          break
        case 'route':
          this.$router.push(buttonData.link)
      }
    },
    secondButtonClicked() {},
    ...mapMutations(['setSpeakersModalData', 'toggleSpeakersModal']),
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
    grid-template-columns: 45fr 55fr;
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
  margin-top: -10px;

  @include mq(sm) {
    gap: 16px;
  }

  @include mq() {
    justify-self: end;
    grid-row: 1;
    grid-column: 2;
    margin-top: 0px;
  }

  @include mq(lg) {
    grid-row: 1;
    grid-column: 2;
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
  flex-direction: column;
  gap: 20px;
  grid-column: 1 / -1;

  @include mq(sm) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;

    &.one-button {
      justify-content: center;

      @include mq(lg) {
        flex-direction: row-reverse;
        justify-content: space-between;
      }
    }
  }

  @include mq(lg) {
    grid-column: 2;
    grid-row: 3;
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
  padding: 10px 0;
  border: none;
  letter-spacing: 1px;

  &.disabled {
    border: 2.5px solid $secondary;
    color: $secondary;
    background-color: $white;
    pointer-events: none;
  }

  @include mq(xs) {
    width: 100%;
  }

  @include mq(sm) {
    width: 48%;
    padding: 12px 0;
  }

  @include mq() {
    width: 47%;
    font-size: 20px;
    padding: 12px 0;
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
    grid-column: 1;
    grid-row: 2 / 4;
    height: 300px;
    aspect-ratio: auto;
  }
}

.description {
  font-size: 16px;

  @include mq(sm) {
    font-size: 20px;
    line-height: 1.6;
  }

  @include mq() {
    grid-column: 1 / -1;
  }

  @include mq(lg) {
    grid-column: 2;
    grid-row: 2;
    align-self: flex-start;
    line-height: 1.66;
  }
}
</style>
