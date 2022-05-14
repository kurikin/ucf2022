<template>
  <div class="department container">
    <h2 class="section-heading">都市社会共生学科</h2>
    <div class="grid">
      <img class="department-img" src="/departments/tosyakyo.jpg" alt="" />

      <p class="description">
        現代都市に暮らす人々の生活を支える社会基盤施設の計画から維持管理まで、構造、海岸・水圏環境、地盤工学と地盤環境、交通と都市、コンクリートの５つの研究分野を軸に学んでいく学科です。<br />
        都市基盤に係る技術やデザイン、政策決定、マネジメントなどの専門教育も展開し、近年必要とされている防災・国際・環境といった観点を取り入れながら、安全安心で靭性の高い都市・バランスのとれた持続的発展・国際的な技術協力支援・今日的グローバル課題の解決などの実現に主導的に貢献できる人材を育成します。
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
}

.department-img {
  width: 100%;
  border-radius: $radius-sm;
  margin-bottom: 24px;
}

.description {
  color: $white;
  font-size: 16px;
  line-height: 1.6;

  @include mq() {
    font-size: 18px;
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

  @include mq(md) {
    font-size: 20px;
    padding: 10px 48px;
    border-radius: 32px;
  }
}

.button--primary {
  background-color: $primary;
}

.button--secondary {
  background-color: $secondary;
}
</style>
