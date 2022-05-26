<template>
  <div class="studio-float" :class="{ hide: hideFloat }">
    <img class="twitter-icon" src="/logos/twitter.svg" alt="" />
    <div class="text-box">
      <p class="title"><span>スクショ</span>を<span>ツイート</span>しよう！</p>
      <div class="hashtags">
        <span class="hashtag">#スタジオ診断</span>
        <span class="hashtag">#都市文化祭2022</span>
      </div>
    </div>
    <img
      @click="toggleFloat"
      src="/icons/close.svg"
      alt=""
      class="close-icon"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.hideFloat = false
    }, 1000)
  },
  data() {
    return {
      hideFloat: true,
    }
  },
  methods: {
    toggleFloat() {
      this.hideFloat = !this.hideFloat
    },
  },
}
</script>

<style lang="scss" scoped>
.studio-float {
  width: 94%;
  position: fixed;
  top: 100vh;
  transform: translate(3%, calc(-100% - env(safe-area-inset-bottom) - 44px));

  z-index: 100;
  padding: 10px 18px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: $blue;
  box-shadow: 0px 5px 10px hsla(0, 0%, 0%, 0.3);

  transition-property: transform opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;

  &.hide {
    transform: translate(3%, 0);
    opacity: 0.3;
  }

  @include mq(xs) {
    gap: 24px;
    // transform: translate(3%, calc(-100% - 44px));
  }

  @include mq(sm) {
    display: none;
  }
}

.twitter-icon {
  height: 24px;
  width: 24px;
  display: inline-block;

  @include mq(xs) {
    height: 28px;
    width: 28px;
  }
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
