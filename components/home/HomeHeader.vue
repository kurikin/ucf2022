<template>
  <header class="home-header fadeUp">
    <Hamburger :baseColor="'white'" />
    <div class="container grid">
      <!-- サイドメニュー ( md 以下の端末のみ ) -->
      <img class="logo" src="logo.png" alt="" />
      <!-- SNS メニュー ( md 以上の端末で表示 ) -->
      <div class="sns">
        <a
          class="sns-link"
          href="https://twitter.com/cus_ucf_oc"
          target="_blank"
        >
          <img class="sns-logo" src="twitter.svg" alt="" />
        </a>
        <a
          class="sns-link"
          href="https://www.instagram.com/cus_ucf_oc/?hl=ja"
          target="_blank"
        >
          <img class="sns-logo" src="instagram.svg" alt="" />
        </a>
        <a class="sns-link" href="https://note.com/ucf2022/" target="_blank">
          <img class="sns-logo" src="note.svg" alt="" />
        </a>
      </div>
      <div class="description">
        <p class="date">
          <span>2022</span>年<span> 6</span>月<span> 26</span>日（日）
        </p>
        <p class="desc">
          横浜国立大学都市科学部<br />オープンキャンパス同時開催
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.grid {
  gap: 48px;
}

.home-header {
  width: 100%;
  padding-top: 32px;
  padding-bottom: 24px;
  margin-bottom: 24px;

  background: linear-gradient(
      to bottom,
      hsla(200, 100%, 11%, 1) 0,
      hsla(200, 100%, 11%, 0.82) 3%,
      hsla(200, 100%, 11%, 0.82) 92%,
      hsla(200, 100%, 11%, 1) 100%
    ),
    url('/header-back.jpg');
  background-position: center;
}

.logo {
  width: 90%;
  height: 90%;
  object-fit: contain;
  justify-self: center;
  margin-top: 24px;
}

.sns {
  display: none;
}

.description {
  display: grid;
  gap: 8px;
  font-size: 18px;
  color: $white;

  .date span {
    font-size: 30px;
    font-weight: 700;
    margin-right: 1px;
  }
}

@include mq(sm) {
  .home-header {
    margin-bottom: 48px;
  }

  .logo {
    width: 85%;
    height: 85%;
    margin-top: 32px;
  }

  .description {
    font-size: 24px;
  }
  .date span {
    font-size: 36px;
  }
}

@include mq() {
  .grid {
    align-content: center;
    grid-template-columns: 45fr 55fr;
    grid-template-rows: auto 1fr;
    gap: 0;
  }
  .home-header {
    background: linear-gradient(
        to bottom,
        hsla(200, 100%, 11%, 0.82) 0,
        hsla(200, 100%, 11%, 0.82) 90%,
        hsla(200, 100%, 11%, 1) 100%
      ),
      url('/header-back.jpg');
    background-position: center;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .logo {
    width: 100%;
    height: 100%;
    margin-top: 0;
    grid-row: 1 / -1;
    margin-bottom: 0;
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
    z-index: 9999;
  }
  .sns-logo {
    width: 100%;
    height: 100%;
  }

  .description {
    text-align: right;
    justify-content: end;
    align-content: end;
    grid-row: 2;
    grid-column: 2;
  }
}
</style>
