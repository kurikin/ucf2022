<template>
  <section class="thanks container fade-in-observe">
    <h2 class="section-heading">ご参加ありがとうございました</h2>
    <div class="text-box">
      <p class="text">都市文化祭2022は無事終了いたしました。<br /></p>
      <p class="text">
        オンデマンド企画およびライブ配信企画のアーカイブは、<br
          class="show-over-sm"
        />
        引き続き企画一覧ページからご覧いただけます。
      </p>
    </div>
    <nuxt-link class="primary-button" to="/events/">アーカイブを見る</nuxt-link>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.thanks {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;

  @include mq() {
    margin-bottom: 80px;
  }

  @include mq(lg) {
    margin-bottom: 94px;
  }
}

.text-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @include mq() {
    gap: 24px;
    margin-bottom: 48px;
  }
}
.text {
  display: grid;
  gap: 24px;
  color: $white;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  font-weight: 400;

  @include mq(sm) {
    font-size: 20px;
  }

  @include mq() {
    font-size: 22px;
  }

  @include mq(lg) {
    line-height: 1.7;
  }
}

.primary-button {
  @include mq(lg) {
    padding: 10px 36px;
  }
}
</style>
