<template>
  <section class="theme container">
    <h2 class="theme-heading">都市文化祭2022テーマ</h2>
    <div class="theme-box">
      <div class="main-theme">
        <div class="title">
          <h3 class="text">メインテーマ</h3>
          <div class="underline"></div>
        </div>
        <img src="logo.png" alt="" class="logo" />
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
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.theme {
  margin-bottom: 32px;
}

.theme-heading {
  color: $white;
  font-size: 30px;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 32px;
}

.theme-box {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.logo {
  display: block;
  height: 80%;
  width: 80%;
  margin: 0 auto;
}

.title {
  display: grid;
  gap: 2px;
  margin-bottom: 28px;

  .text {
    font-size: 20px;
  }

  .underline {
    width: 100%;
    height: 0.5px;
    background-color: $white;
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
  gap: 24px;
  font-family: 'Zen Antique';

  .item-left {
    color: $secondary;
  }

  .item-right {
    color: $white;
  }
}
</style>
