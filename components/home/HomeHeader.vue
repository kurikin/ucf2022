<template>
  <header class="home-header fadeIn animation-1">
    <div class="container grid">
      <img class="logo fadeIn animation-1" src="/logos/logo.svg" alt="" />
      <!-- SNS メニュー ( md 以上の端末で表示 ) -->
      <div class="sns fadeIn animation-2">
        <a
          class="sns-link"
          href="https://twitter.com/cus_ucf_oc"
          target="_blank"
        >
          <img class="sns-logo" src="/logos/twitter.svg" alt="" />
        </a>
        <a
          class="sns-link"
          href="https://www.instagram.com/cus_ucf_oc/?hl=ja"
          target="_blank"
        >
          <img class="sns-logo" src="/logos/instagram.svg" alt="" />
        </a>
        <a class="sns-link" href="https://note.com/ucf2022/" target="_blank">
          <img class="sns-logo" src="/logos/note.svg" alt="" />
        </a>
      </div>
      <div class="description fadeIn animation-2">
        <p class="date">
          <span>2022</span>年<span> 6</span>月<span> 26</span>日（日）
        </p>
        <p class="desc">
          横浜国立大学都市科学部<br />オープンキャンパス同時開催
        </p>
      </div>
    </div>
    <HomeNavBar class="fadeIn animation-3" />
    <div class="center-line fadeIn animation-3" />
  </header>
</template>

<script>
import HomeNavBar from './HomeNavBar.vue'
export default { components: { HomeNavBar } }
</script>

<style lang="scss" scoped>
.grid {
  gap: 48px;
}

.home-header {
  width: 100%;
  padding-top: 32px;
  padding-bottom: 12px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
      to bottom,
      hsla(200, 100%, 11%, 1) 0,
      hsla(200, 100%, 11%, 0.82) 3%,
      hsla(200, 100%, 11%, 0.82) 92%,
      hsla(200, 100%, 11%, 1) 100%
    ),
    url('/header-back.jpg');
  background-position: center;

  @include mq(sm) {
    padding-top: 48px;
    margin-bottom: 48px;
  }

  @include mq() {
    background: linear-gradient(
        to bottom,
        hsla(200, 100%, 11%, 0.82) 0,
        hsla(200, 100%, 11%, 0.82) 90%,
        hsla(200, 100%, 11%, 1) 100%
      ),
      url('/header-back.jpg');

    background-position: center;
    padding-top: 64px;
    margin-bottom: 64px;
    padding-bottom: 0;
  }

  @include mq(lg) {
    padding-top: 80px;
  }
}

.logo {
  width: auto;
  height: 180px;
  display: block;
  object-fit: contain;
  justify-self: center;
  margin-top: 24px;

  @include mq(xs) {
    height: 210px;
  }

  @include mq(sm) {
    height: 330px;
    margin-top: 32px;
  }

  @include mq() {
    height: 260px;
    margin-top: 0;
    grid-row: 1 / -1;
    margin-bottom: 0;
  }

  @include mq(lg) {
    height: 320px;
  }
}

.sns {
  display: none;
}

.description {
  display: grid;
  gap: 8px;
  font-size: 18px;
  color: $white;

  @include mq(sm) {
    font-size: 24px;
  }

  @include mq() {
    text-align: right;
    justify-content: end;
    align-content: end;
    grid-row: 2;
    grid-column: 2;
  }

  .date span {
    font-size: 30px;
    font-weight: 700;
    margin-right: 1px;

    @include mq(sm) {
      font-size: 36px;
    }
  }
}

@include mq() {
  .grid {
    align-content: center;
    grid-template-columns: 45fr 55fr;
    grid-template-rows: auto 1fr;
    gap: 0;
  }

  .sns {
    display: flex;
    gap: 48px;
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
    align-self: start;
  }
  .sns-link {
    width: 32px;
    height: 32px;
  }
  .sns-logo {
    width: 100%;
    height: 100%;
  }
}

.center-line {
  width: 1px;
  height: 100px;
  background-color: $white;
  margin: 24px auto;

  @include mq(sm) {
    height: 150px;
    margin: 48px auto;
  }

  @include mq() {
    height: 160px;
    margin: 64px auto;
  }

  @include mq(lg) {
    height: 180px;
  }
}
</style>
