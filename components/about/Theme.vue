<template>
  <section class="theme container">
    <h2 class="theme-heading">都市文化祭2022テーマ</h2>
    <div class="theme-box">
      <div class="main-theme">
        <div class="title">
          <h3 class="text">メインテーマ</h3>
          <div class="underline"></div>
        </div>
        <img src="/logos/text-logo.svg" alt="" class="logo" />
        <p class="description">
          「雑踏」は、都市そのものの象徴とも捉えることができます。都市は外的に定義されるだけでなく、人々の足跡が、時間というレイヤーを重ねながら地層のように立ち昇らせることもあります。しかし、コロナ禍で、都市から雑踏が消えました。その影を追うように、私たちは「雑踏」というテーマを掲げることにしました。
        </p>
      </div>
      <div class="sub-theme">
        <div class="title">
          <h3 class="text">サブテーマ</h3>
          <div class="underline"></div>
        </div>
        <ul class="sub-theme-list">
          <li class="list-item">
            <p class="item-left">雑踏に　</p>
            <p class="item-right">のまれる</p>
          </li>
          <li class="list-item">
            <p class="item-left">雑踏に　</p>
            <p class="item-right">たたずむ</p>
          </li>
          <li class="list-item">
            <p class="item-left">雑踏から</p>
            <p class="item-right">はぐれる</p>
          </li>
        </ul>
        <p class="description">
          「のまれる」「たたずむ」「はぐれる」は、「雑踏」に繋がる動詞たちであり、雑踏と関わる自分自身の在り方を問います。<br />個としてのあなた自身は、雑踏をどう歩くのでしょうか。「雑踏」の後に続ける言葉を、都市文化祭を通じて考えてみてほしいと思っています。
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
//  - Font sizes (px)
//  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

// - Spacing system (px)
// 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128
.theme {
  margin-bottom: 20px;

  @include mq() {
    margin-bottom: 48px;
  }
}

.theme-heading {
  color: $white;
  font-size: 30px;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 32px;
  font-weight: 500;

  @include mq(sm) {
    font-size: 44px;
    margin-bottom: 48px;
  }

  @include mq() {
    font-size: 52px;
    margin-bottom: 64px;
    letter-spacing: 5px;
  }
}

.theme-box {
  display: flex;
  flex-direction: column;
  gap: 28px;

  @include mq(sm) {
    flex-direction: row;
    gap: 32px;
  }
}

.logo {
  display: block;
  width: 220px;
  height: 220px;
  margin: 0 auto;

  @include mq(sm) {
    margin: 0;
  }
}

.title {
  display: grid;
  gap: 2px;
  margin-bottom: 48px;

  .text {
    font-size: 20px;
  }

  .underline {
    width: 100%;
    height: 0.5px;
    background-color: $white;
  }
}

.description {
  margin-top: 48px;
  font-size: 16px;
  color: $white;
  font-weight: 400;
  line-height: 1.6;

  @include mq() {
    font-size: 18px;
  }

  @include mq(lg) {
    font-size: 20px;
    line-height: 1.7;
  }
}

.sub-theme-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.list-item {
  display: flex;
  font-size: 30px;
  gap: 0px;
  font-family: 'Zen Antique';

  @include mq(xs) {
    gap: 16px;
  }

  @include mq(sm) {
    gap: 0;
  }

  .item-left {
    color: $secondary;
  }

  .item-right {
    color: $white;
  }
}

@include mq(sm) {
  .title {
    .text {
      font-size: 30px;
    }
  }

  .main-theme {
    flex: 1;
  }

  .sub-theme {
    flex: 1;
  }

  .sub-theme-list {
    align-items: flex-start;
    height: 220px;
  }
}

@include mq() {
  .title {
    margin-bottom: 32px;
    gap: 4px;

    .text {
      font-size: 30px;
    }
  }

  .list-item {
    font-size: 36px;
    gap: 32px;
  }

  .main-theme,
  .sub-theme {
    flex: 1;
  }

  .logo {
    width: 250px;
    height: 250px;
  }

  .theme-box {
    gap: 64px;
  }

  .sub-theme-list {
    height: 250px;
  }
}

@include mq(lg) {
  .title {
    margin-bottom: 44px;
  }
  .list-item {
    font-size: 44px;
    gap: 48px;
  }
}
</style>
