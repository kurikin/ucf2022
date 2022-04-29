<template>
  <div class="studio container">
    <h1 class="studio-name"><slot></slot></h1>
    <div class="card-container">
      <img
        src="left-arrow-black.svg"
        alt=""
        class="swiper-button-prev"
        :class="category"
      />
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="studio in data.studios" :key="studio.teacherName">
          <StudioCard v-on="$listeners" :data="studio" />
        </swiper-slide>
      </swiper>
      <img
        src="right-arrow-black.svg"
        alt=""
        class="swiper-button-next"
        :class="category"
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
    data: {
      type: Object,
      default: {},
    },
    category: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: `.swiper-button-next.${this.category}`,
          prevEl: `.swiper-button-prev.${this.category}`,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          992: {
            spaceBetween: 30,
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
.studio {
  margin-top: 48px;
  width: 100%;

  @include mq() {
    margin-top: 64px;
  }
}

.swiper {
  flex: 1;
}

.studio-name {
  color: $black;
  font-size: 24px;
  letter-spacing: 4px;
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
  gap: 12px;

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

  @include mq() {
    width: 15px;
  }
}
</style>
