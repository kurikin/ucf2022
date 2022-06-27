<template>
  <section class="survey container">
    <h2 class="section-heading">アンケート</h2>
    <div class="cta">
      <div class="text-box">
        <p class="text">
          今後の開催に役立てるため、アンケートへのご協力をお願いいたします。<br />都市文化祭への率直なご意見・ご感想をぜひお聞かせください。<br />
        </p>
        <p class="text">回答時間目安：約１分</p>
      </div>
      <a href="#" class="primary-button">アンケートはこちら</a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.survey {
  margin-bottom: 64px;

  @include mq() {
    margin-bottom: 80px;
  }

  @include mq(lg) {
    margin-bottom: 94px;
  }
}

.cta {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include mq() {
    gap: 48px;
  }

  @include mq(lg) {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    gap: 8px;
  }
}

.text-box {
  display: flex;
  flex-direction: column;

  @include mq(lg) {
    gap: 12px;
  }
}

.text {
  gap: 24px;
  color: $white;
  font-size: 18px;
  line-height: 1.7;
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
    text-align: left;
  }
}

.primary-button {
  @include mq(lg) {
    margin: 0;
    padding: 10px 36px;
    text-align: center;
  }
}
</style>
