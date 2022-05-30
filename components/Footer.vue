<template>
  <div class="container">
    <footer class="footer">
      <ul class="nav-list">
        <li>
          <nuxt-link class="nav-link" to="/members">実行委員一覧</nuxt-link>
        </li>
        <li>
          <a
            class="nav-link"
            target="_blank"
            href="https://www.ynu.ac.jp/access/index.html"
            >アクセス</a
          >
        </li>
        <li>
          <a
            class="nav-link"
            target="_blank"
            href="https://www.cus.ynu.ac.jp/exam/exam/examinfo.html"
            >入試情報</a
          >
        </li>
        <li><nuxt-link class="nav-link" to="/contact">お問合せ</nuxt-link></li>
      </ul>
      <p class="copyright">&copy;2022 都市文化祭2022実行委員会</p>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
  width: 100%;

  @include mq(md) {
    margin: 0 auto;
    padding: 0 28px;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: $secondary;
  padding: 20px;
  padding-bottom: 8px;

  border-top-left-radius: $radius-xs;
  border-top-right-radius: $radius-xs;

  @include mq(sm) {
    padding: 28px;
    padding-bottom: 10px;

    border-top-left-radius: $radius-sm;
    border-top-right-radius: $radius-sm;
  }

  @include mq(md) {
    padding: 28px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: $radius-md;
    border-top-right-radius: $radius-md;
  }
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include mq(md) {
    flex-direction: row;
    gap: 24px;
  }
}

.nav-link {
  font-size: 18px;
  color: $white;
}

.copyright {
  font-size: 16px;
  text-align: center;
  color: $white;
}
</style>
