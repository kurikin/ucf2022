<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>新<span>着</span>情報</template>
    </WhiteHeader>
    <div class="content container">
      <div class="news">
        <h2 class="title">{{ this.title }}</h2>
        <p class="body">{{ this.body }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default {
  async asyncData({ $microcms, params }) {
    const id = params.id
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 20 },
    })
    return data.contents[id]
  },
  components: { Footer },
}
</script>

<style lang="scss" scoped>
.title {
  color: $secondary;
  font-family: 'Zen Kaku Gothic New';
  font-size: 24px;
  font-weight: 600;
}

.news {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
