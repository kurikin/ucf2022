<template>
  <div class="white-background">
    <div class="no-margin-content container">
      <ErrorWhiteHeader class="upper-element">
        <template v-if="error.statusCode === 404" v-slot:page-title
          >404 Not Found</template
        >
        <template v-else v-slot:page-title>Error :(</template>
        <template v-slot:custom>
          <div class="header-bottom-box">
            <p v-if="error.statusCode === 404" class="description">
              お探しのページは見つかりませんでした。<br />URLに誤りがないかご確認ください。
            </p>
            <p v-else class="description">エラーが発生しました。</p>
            <button class="primary-button return-to-home" @click="backToHome">
              ホームに戻る
            </button>
          </div>
        </template>
      </ErrorWhiteHeader>
      <img class="footprint fadeIn animation-1" src="/footprint.png" alt="" />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'エラー | 都市文化祭2022 公式ホームページ',
    }
  },
  props: ['error'],
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
}

.primary-button.return-to-home {
  margin: 0;
  padding: 10px 24px;

  &:hover {
    cursor: pointer;
  }

  @include mq() {
    padding: 12px 48px;
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

.footprint {
  position: absolute;
  height: 50vh;
  right: 0;
  bottom: 0;

  @include mq(xs) {
    right: 20px;
    height: 60vh;
  }

  @include mq(sm) {
    right: 40px;
    height: 70vh;
  }

  @include mq() {
    height: 74vh;
    right: 50px;
  }
}

.upper-element {
  position: relative;
  z-index: 10;
}
</style>
