<template>
  <div class="top">
    <!-- ヘッダー -->
    <TopHeader
      class="top-header"
      :sideNavOpen="sideNavOpen"
      @sideNavToggle="sideNavOpen = !sideNavOpen"
    />
    <!-- サイドメニュー ( md 以下の端末のみ ) -->
    <SideNav @sideNavClose="sideNavOpen = false" :show="sideNavOpen" />
    <!-- 新着情報 -->
    <section class="section-news container">
      <h2 class="heading">新着情報</h2>
      <ul class="news-list">
        <li v-for="content in contents" :key="content.id">
          <nuxt-link class="news-item" to="#">
            <span class="date"></span>
            <p class="title">{{ content.title }}</p>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import TopHeader from '../components/header/TopHeader.vue'
import SideNav from '../components/navigation/SideNav.vue'
export default {
  name: 'IndexPage',
  components: { TopHeader, SideNav },
  data() {
    return {
      sideNavOpen: false,
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.sideNavOpen ? 'side-nav-open' : '',
      },
    }
  },
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
/* ### ヘッダー ### */
.top-header {
  margin-bottom: 24px;
}

/* ### 各セクションのタイトル ### */
.heading {
  font-family: 'Zen Antique';
  color: $white;
  font-size: 30px;
  margin-bottom: 16px;
}

/* ### 新着情報 ### */
.section-news {
  text-align: center;
}

.news-list {
  background-color: $white;
  display: grid;
  gap: 16px;
  width: 100%;
  padding: 16px 12px;
  border-radius: 16px;
}

.news-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: left;

  .date {
  }
  .title {
    color: $black;
    font-size: 16px;
  }
}
</style>
