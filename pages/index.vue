<template>
  <div>
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
      <h2 class="title">新着情報</h2>
      <ul class="news-list">
        <li class="news-item">
          <nuxt-link to="#">
            <span></span>
            <p></p>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            <span></span>
            <p></p>
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
}
</script>

<style lang="scss" scoped>
/* ### ヘッダー ### */
.top-header {
  margin-bottom: 24px;
}

/* ### 各セクションのタイトル ### */
.title {
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
  height: 100px;
  width: 100%;
  border-radius: 16px;
}
</style>
