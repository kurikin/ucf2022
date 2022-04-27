<template>
  <div class="studio container">
    <h1 class="studio-name">海外研究スタジオ</h1>
    <div class="card-container"></div>
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
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
  gap: 20px;
}

.swiper-button-prev,
.swiper-button-next {
  color: $white;
}
</style>
