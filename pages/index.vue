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

  @include mq() {
    margin-bottom: 48px;
  }
}

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
  margin-bottom: 32px;
}

.news-list {
  background-color: $white;
  display: grid;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border-radius: 16px;

  @include mq(sm) {
    padding: 24px;
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
</style>
