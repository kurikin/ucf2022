<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>新<span>着</span>情報</template>
    </WhiteHeader>
    <div class="content container">
      <div class="news fadeIn animation-1">
        <h2 class="title">{{ this.title }}</h2>
        <div v-html="this.body" class="body" />
      </div>
      <img
        class="footprint fadeIn animation-1 show-over-md"
        src="/footprint.png"
        alt=""
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import { startObserve } from '~/scripts/observe'
export default {
  head() {
    return {
      title: '新着情報 | 都市文化祭2022',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '都市文化祭2022の新着情報一覧ページです。',
        },
      ],
    }
  },
  mounted() {
    startObserve()
  },
  async asyncData({ $microcms, params }) {
    const data = await $microcms.get({
      endpoint: `news/${params.slug}`,
    })

    return data
  },

  components: { Footer },
}
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include mq(sm) {
    margin-top: -20px;
  }

  @include mq() {
    gap: 32px;
    width: 75%;
  }

  @include mq(lg) {
    width: 70%;
  }
}

.title {
  color: $secondary;
  font-family: 'Zen Kaku Gothic New';
  font-size: 24px;
  font-weight: 600;

  @include mq(sm) {
    font-size: 30px;
  }

  @include mq() {
    font-size: 36px;
  }
}

.body {
  display: inline-block;
  font-size: 16px;
  line-height: 1.55;

  @include mq(sm) {
    line-height: 1.65;
  }

  @include mq() {
    font-size: 18px;
  }
}

.footprint {
  position: absolute;
  right: 50px;
  bottom: 0;
  transform: translateY(62px);
  height: 68vh;
}
</style>
