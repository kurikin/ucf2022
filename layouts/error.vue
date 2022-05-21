<template>
  <div class="white-background">
    <div class="content">
      <WhiteHeader>
        <template v-slot:page-title>404 Not Found</template>
        <template v-slot:custom>
          <div class="header-bottom-box">
            <p class="description">
              お探しのページは見つかりませんでした。<br />URLに誤りがないかご確認ください。
            </p>
            <button class="primary-button return-to-home" @click="backToHome">
              ホームに戻る
            </button>
          </div>
        </template>
      </WhiteHeader>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.header-bottom-box {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;

  @include mq(sm) {
    gap: 48px;
  }

  @include mq() {
    gap: 48px;
  }

  @include mq(lg) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
}

.primary-button.return-to-home {
  margin: 0;
  padding: 10px 24px;

  &:hover {
    cursor: pointer;
  }

  @include mq() {
    padding: 12px 64px;
  }

  @include mq(lg) {
    justify-self: end;
  }
}

.description {
  font-size: 18px;

  @include mq(sm) {
    font-size: 20px;
  }
}
</style>
