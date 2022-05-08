<template>
  <section class="message container">
    <div class="message-header">
      <h1 class="message-title">都市に生きる全ての人へ</h1>
      <p class="position">
        都市科学部 都市社会共生学科3年<br />
        都市文化祭2022実行委員長
      </p>
      <p class="name">池田瑞季</p>
      <img class="portrait show-over-xs" src="/portraits/ikeda2.png" alt="" />
    </div>
    <div class="message-container">
      <p class="text">
        都市文化祭は2020年に、当時の都市社会共生学科の学生が中心となり、初めて開催されました。感染症が蔓延し、学びの場が閉ざされていた当時、オンラインでその可能性を探った先輩方、そして学科の前身である教育人間科学部の人間文化課程で行われていた「人間文化祭」にも敬意を表し、今年で3年目を迎えます。<br /><br />
        横浜国立大学の都市科学部は、「都市」というキーワードを絆に、様々な学問分野が集まっています。都市、というひとつの言葉に対して、こんなにも大きな広がりを持つのかと、その深さと広がりに日々驚くばかりです。そして、その多様さは、誰かと共に生きることの困難さとも比例します。学部にいると、ひとつの「都市」の中にいるはずが、実際には皆がバラバラの都市を心に秘めているという当たり前の事実に直面します。都市を学ぶことは孤独な営みとも言えるかもしれません。しかし、私の愛する都市は、別の誰かの学ぶ都市と合流し、最終的にはひとつになって、新しい居場所を生むのです。私にとって、多様であることを許されることは、こんなにも寂しく、怖く、しかしその中から自由を知る場所が、都市科学部でした。<br /><br />
        「都市」を学び、「都市」で学び、「都市」と学ぶ。あらゆるものが詰まった都市というフィールドで、何を学び、何を考えるのかを、形にし、発信していくイベントが都市文化祭です。<br /><br />
        都市文化祭に参加してくださる皆さま。都市とはどんな場所であり、どんな場所であったら良いと思いますか。私たち都市科学部生が日々考え、話しあい、実践し、失敗し、また考える、その「あがき」の過程を、ぜひ目の当たりにしてほしいと思います。それらは全て都市の中で行われる営みであり、膨大なものが集まる都市を掴みとり、あわよくば俯瞰し、変化させようとする挑戦もあるかもしれません。もしくは、街の片隅でひっそりと生きる人々を掬いあげる、静かな営みも見られるかもしれません。しかし、すべては血の通った学びです。あなたは、あなた以外の人と、同じ場所でどうやって共に生きますか。その難題のための一助として、私たちは都市文化祭を開催し、「都市」という視点を提供します。
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.message-title {
  color: $white;
  font-size: 30px;
  letter-spacing: 2px;
  text-align: left;
  margin-bottom: 16px;
  font-weight: 500;
  grid-row: 1;

  @include mq(xs) {
    grid-column: 1 / -1;
  }

  @include mq(sm) {
    font-size: 44px;
    margin-bottom: 20px;
  }

  @include mq() {
    font-size: 52px;
    margin-bottom: 32px;
    letter-spacing: 5px;
  }
}

.message-header {
  color: $white;
  display: grid;
  gap: 4px;

  @include mq(xs) {
    grid-template-columns: 1fr auto;
    align-items: flex-start;
    gap: 8px;
  }

  .position {
    font-size: 16px;

    @include mq(xs) {
      grid-column: 1;
    }

    @include mq(sm) {
      font-size: 18px;
    }

    @include mq() {
      font-size: 24px;
    }
  }

  .name {
    font-size: 24px;

    @include mq(xs) {
      grid-column: 1;
    }

    @include mq(sm) {
      font-size: 30px;
    }

    @include mq() {
      font-size: 36px;
    }
  }
}

.portrait {
  height: 100px;
  grid-row: 2 / 4;
  grid-column: 2;

  @include mq(sm) {
    height: 120px;
  }

  @include mq() {
    height: 150px;
  }

  @include mq(lg) {
    height: 240px;
    grid-row: 1 / 4;
  }
}

.message-container {
  margin-top: 24px;
  margin-bottom: 32px;
  background-color: $white;
  padding: 24px;
  border-radius: $radius-xs;

  @include mq(sm) {
    padding: 32px;
    margin-top: 32px;
    margin-bottom: 48px;
    border-radius: $radius-sm;
  }

  @include mq() {
    padding: 48px;
    margin-top: 48px;
    margin-bottom: 64px;
    border-radius: $radius-md;
  }

  @include mq(lg) {
    margin-top: 64px;
    margin-bottom: 96px;
    padding: 80px;
  }

  .text {
    color: $black;
    line-height: 1.7;
    font-size: 16px;

    @include mq(sm) {
      line-height: 1.8;
      font-size: 18px;
    }

    @include mq() {
      line-height: 1.9;
      font-size: 20px;
    }

    @include mq(lg) {
      line-height: 2;
      font-size: 20px;
    }
  }
}
</style>
