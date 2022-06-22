<template>
  <div class="float-wrapper">
    <div
      class="survey-float"
      @click="openSurveyPage()"
      :class="{ hide: hideFloat }"
    >
      <img class="survey-icon" src="/icons/survey.svg" alt="" />
      <div class="text-box">
        <p class="small-text">今後の開催に役立てるため</p>
        <p class="big-text">アンケートにご協力ください。</p>
      </div>
      <img
        @click.stop="toggleFloat()"
        src="/icons/black-close.svg"
        alt=""
        class="close-icon"
      />
    </div>
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
    openSurveyPage() {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSf0CBDpgQrEC7EqyTvuu2HjlvpQpmcEypW62UsU-6tjVpfIbA/viewform',
        '_blank'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.float-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
}

.survey-float {
  width: 94%;
  transform: translate(3%, 0);
  pointer-events: auto;

  position: absolute;
  bottom: 30px;
  padding: 12px 20px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background-color: $white;
  box-shadow: 0px 5px 10px hsla(0, 0%, 0%, 0.3);

  transition-property: transform opacity;
  transition-duration: 0.7s;
  transition-timing-function: ease-in-out;

  &.hide {
    transform: translate(3%, calc(30px + 100%));
    opacity: 0.95;
  }

  &:hover {
    cursor: pointer;
  }

  @include mq(xs) {
    gap: 20px;
    padding: 12px 24px;
  }

  @include mq(sm) {
    gap: 24px;
    padding: 16px 24px;
  }

  @include mq() {
    right: 36px;
    width: auto;
    gap: 28px;
    padding: 18px 32px;
  }
}

.survey-icon {
  height: 36px;
  display: inline-block;

  @include mq(xs) {
    height: 100%;
  }
}

.close-icon {
  height: 16px;
  width: 16px;
  display: inline-block;

  @include mq() {
    height: 20px;
    width: 20px;
  }

  &:hover {
    cursor: pointer;
  }
}

.text-box {
  color: $primary;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px;

  .small-text {
    font-size: 14px;

    @include mq(xs) {
      font-size: 15px;
    }

    @include mq() {
      font-size: 18px;
    }
  }

  .big-text {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;

    @include mq() {
      font-size: 20px;
    }
  }
}
</style>
