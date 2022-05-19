<template>
  <div
    class="studio-slider container fadeUp"
    :class="'animation-' + animationNum"
  >
    <h1 class="studio-name">{{ studios.title }}</h1>
    <div class="card-container">
      <img
        src="/icons/left-arrow-black.svg"
        alt=""
        class="swiper-button-prev"
        :class="'index-' + index"
      />
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          v-for="studio in studios.studioList"
          :key="studio.teacherName"
        >
          <StudioCard :studioData="studio" />
        </swiper-slide>
      </swiper>
      <img
        src="/icons/right-arrow-black.svg"
        alt=""
        class="swiper-button-next"
        :class="'index-' + index"
      />
    </div>
  </div>
</template>

<script>
import StudioCard from './StudioCard.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: { StudioCard, Swiper, SwiperSlide },
  props: {
    studios: {
      type: Object,
    },
    index: {
      type: Number,
    },
    animationNum: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: false,
        navigation: {
          nextEl: `.swiper-button-next.index-${this.index}`,
          prevEl: `.swiper-button-prev.index-${this.index}`,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          992: {
            spaceBetween: 32,
            slidesPerView: 3,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
//  - Font sizes (px)
//  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128
.studio-slider {
  margin-top: 64px;
  width: 100%;

  @include mq() {
    margin-top: 80px;
  }
}

.swiper {
  flex: 1;
}

.studio-name {
  color: $white;
  font-size: 28px;
  letter-spacing: 3px;
  font-weight: 500;
  margin-bottom: 24px;

  @include mq(sm) {
    font-size: 36px;
    margin-bottom: 32px;
    letter-spacing: 6px;
  }

  @include mq() {
    font-size: 44px;
    letter-spacing: 8px;
  }

  @include mq(lg) {
    margin-bottom: 48px;
  }
}

.card-container {
  display: flex;
  align-items: center;
  gap: 20px;

  @include mq(sm) {
    gap: 20px;
  }

  @include mq() {
    gap: 28px;
  }
}

.swiper-button-prev,
.swiper-button-next {
  width: 12px;
  position: static;
  outline: none;

  @include mq() {
    width: 15px;
  }
}
</style>
