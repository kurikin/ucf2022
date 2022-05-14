<template>
  <div class="department container">
    <h2 class="section-heading">都市社会共生学科</h2>
    <div class="grid">
      <div class="image-box">
        <img class="department-img" src="/departments/dep2.jpg" alt="" />
      </div>

      <p class="description">
        現代社会において、多様性が重要であることは誰もが認めますが、その実現は困難を極めることも事実です。これは議論レベルの話ではなく、どんな場所でも、人々が衝突や葛藤を繰り返しながら共生の試みようとしています。<br />
        都市社会共生学科ではこの問題に対して、都市社会というフィールドで、人文知を用いて共生の可能性を挑んでいます。それは都市から始まり、世界へと続く学びだと考えています。
      </p>
      <div class="button-box">
        <button class="base-button button--secondary">スタジオ診断</button>
        <button class="base-button button--primary">
          都市社会共生学科 公式HP
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  row-gap: 24px;

  @include mq() {
    grid-template-columns: 60fr 40fr;
    grid-template-rows: auto auto;
    column-gap: 32px;
    row-gap: 64px;
  }

  @include mq(lg) {
    grid-template-columns: 65fr 35fr;
    column-gap: 48px;
    row-gap: 80px;
  }
}

.image-box {
  overflow: hidden;
  border-radius: $radius-sm;
  max-height: 300px;

  @include mq() {
    grid-column: 2;
    grid-row: 1 / 3;
    margin-bottom: 0;

    max-height: none;
    height: 100%;
  }
}

.department-img {
  width: 100%;
  height: 100%;
  object-position: 50% 40%;
  object-fit: cover;
}

.description {
  color: $white;
  font-size: 16px;
  line-height: 1.6;

  @include mq(sm) {
    font-size: 18px;
  }

  @include mq() {
    font-size: 20px;
    line-height: 1.7;
  }
}

.base-button {
  display: inline-block;
  margin: 0 auto;
  color: $white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 24px;
  padding: 8px 24px;
  border: none;
  letter-spacing: 2px;

  @include mq(sm) {
    padding: 10px 24px;
  }

  @include mq() {
    margin: 0;
    font-size: 20px;
    padding: 10px 48px;
    border-radius: 32px;
  }
}

.button-box {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @include mq(sm) {
    gap: 16px;
  }

  @include mq() {
    grid-column: 1;
    grid-row: 2;
    gap: 20px;
    align-items: flex-start;
  }
}

.button--primary {
  background-color: $primary;
}

.button--secondary {
  background-color: $secondary;
}
</style>
