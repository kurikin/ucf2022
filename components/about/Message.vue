<template>
  <section class="message container">
    <h1 class="message-title">都市に生きる全ての人へ</h1>
    <div class="leader-info-box">
      <p class="position">
        都市科学部 都市社会共生学科3年<br />
        都市文化祭2022実行委員長
      </p>
      <p class="name">池田瑞季</p>
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
  margin-bottom: 12px;
  font-weight: 500;

  @include mq(sm) {
    font-size: 36px;
    margin-bottom: 20px;
  }

  @include mq() {
    font-size: 48px;
    letter-spacing: 5px;
  }
}

.leader-info-box {
  color: $white;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;

  .position {
    font-size: 16px;
  }

  .name {
    font-size: 24px;
  }
}

.message-container {
  background-color: $white;
  padding: 24px;
  border-radius: $radius-xs;

  @include mq(sm) {
    padding: 32px;
    border-radius: $radius-sm;
  }

  @include mq() {
    padding: 48px;
    border-radius: $radius-md;
  }

  @include mq(lg) {
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
