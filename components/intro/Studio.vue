<template>
  <div class="studio container">
    <h1 class="studio-name">海外研究スタジオ</h1>
    <div class="card-container">
      <img src="left-arrow-black.svg" alt="" class="swiper-button-prev" />
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <StudioCard />
        </swiper-slide>
        <swiper-slide>
          <StudioCard />
        </swiper-slide>
        <swiper-slide>
          <StudioCard />
        </swiper-slide>
        <swiper-slide>
          <StudioCard />
        </swiper-slide>
        <swiper-slide>
          <StudioCard />
        </swiper-slide>
      </swiper>
      <img src="right-arrow-black.svg" alt="" class="swiper-button-next" />
    </div>
  </div>
</template>

<script>
import StudioCard from './StudioCard.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: { StudioCard, Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.studio {
  margin-top: 48px;
}

.studio-name {
  color: $black;
  font-size: 24px;
  letter-spacing: 4px;
  font-weight: 500;
}

.card-container {
  display: flex;
  align-items: center;
  gap: 28px;
}

.swiper-button-prev,
.swiper-button-next {
  position: static;
  width: 15px;
}
</style>
