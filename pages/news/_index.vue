<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>新<span>着</span>情報</template>
    </WhiteHeader>
    <div class="content">
      <div class="container">
        <div class="news">
          <h2 class="title">{{ this.title }}</h2>
          <p class="body">{{ this.body }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  async asyncData({ $microcms, params }) {
    const index = params.index
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 20, filters: `index[equals]${index}` },
    })

    return data.contents[0]
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
  font-size: 16px;
  line-height: 1.55;

  @include mq(sm) {
    line-height: 1.6;
  }

  @include mq() {
    font-size: 18px;
  }
}
</style>
