<template>
  <div class="countdown fadeIn animation-1">
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
      <div class="countdown">
        <p class="countdown-title"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid {
  gap: 48px;

  @include mq() {
    align-content: center;
    grid-template-columns: 45fr 55fr;
    grid-template-rows: auto 1fr;
    gap: 0;
  }
}

.countdown {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
      to bottom,
      hsla(200, 100%, 11%, 1) 0,
      hsla(200, 100%, 11%, 0.82) 3%,
      hsla(200, 100%, 11%, 0.82) 92%,
      hsla(200, 100%, 11%, 1) 100%
    ),
    url('/header-back.jpg');
  background-position: center;

  @include mq() {
    background: linear-gradient(
        to bottom,
        hsla(200, 100%, 11%, 0.82) 0,
        hsla(200, 100%, 11%, 0.82) 90%,
        hsla(200, 100%, 11%, 1) 100%
      ),
      url('/header-back.jpg');

    background-position: center;
  }
}

.logo {
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

  @include mq() {
    display: flex;
    gap: 48px;
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
    align-self: start;
  }
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

.sns-link {
  @include mq() {
    width: 32px;
    height: 32px;
  }
}

.sns-logo {
  @include mq() {
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
    margin-bottom: 12px;
  }

  @include mq() {
    height: 160px;
    margin: 64px auto;
    margin-bottom: 12px;
  }

  @include mq(lg) {
    height: 180px;
    margin-bottom: 12px;
  }
}
</style>
