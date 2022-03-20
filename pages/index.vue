<template>
  <div>
    <!-- ヘッダー -->
    <TopHeader />
    <!-- 新着情報 -->
    <section class="section-news container">
      <h2 class="heading">新着情報</h2>
      <ul class="news-list">
        <li class="list-item" v-for="content in contents" :key="content.id">
          <nuxt-link class="news-link" to="#">
            <span class="date">{{
              $dateFns.format(content.createdAt, 'yyyy/MM/dd')
            }}</span>
            <p class="title">{{ content.title }}</p>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <!-- 企画一覧を見る -->
    <div class="container center">
      <nuxt-link class="btn" to="#">企画一覧を見る</nuxt-link>
    </div>
    <!-- フッター -->
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 20 },
    })
    return data
  },
}
</script>

<style lang="scss" scoped>
/* ### 各セクションのタイトル ### */
.heading {
  font-family: 'Zen Antique';
  color: $white;
  font-size: 30px;
  margin-bottom: 16px;

  @include mq() {
    font-size: 36px;
    margin-bottom: 32px;
  }
}

/* ### 新着情報 ### */
.section-news {
  text-align: center;
  margin-bottom: 64px;
}

.news-list {
  background-color: $white;
  display: grid;
  gap: 12px;
  width: 100%;
  padding: 20px;
  border-radius: $radius-xs;

  @include mq(sm) {
    padding: 24px;
    border-radius: $radius-sm;
  }

  @include mq(md) {
    border-radius: $radius-md;
  }

  @include mq(lg) {
    padding: 32px;
    gap: 18px;
  }
}
.list-item {
  &:not(:last-child) {
    border-bottom: 0.5px solid $lightgray;
    padding-bottom: 12px;

    @include mq(lg) {
      padding-bottom: 18px;
    }
  }
}

.news-link {
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: left;
  font-size: 16px;
  gap: 16px;

  @include mq() {
    font-size: 18px;
  }

  .date {
    color: $gray;
  }

  .title {
    color: $black;
  }
}

.btn {
  margin: 0 auto;
}
</style>
