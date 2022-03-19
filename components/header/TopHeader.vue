<template>
  <!-- ヘッダー -->
  <header class="header">
    <div class="container grid">
      <NavButton
        :isOpen="sideNavOpen"
        @toggle="$emit('sideNavToggle')"
        class="nav-button"
      />
      <img class="logo" src="logo.png" alt="" />
      <!-- SNS メニュー ( md 以上の端末で表示 ) -->
      <div class="sns">
        <a href="#">
          <img src="twitter.svg" alt="" />
        </a>
        <a href="#">
          <img src="instagram.svg" alt="" />
        </a>
        <a href="#">
          <img src="note.svg" alt="" />
        </a>
      </div>
      <div class="text-box">
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
import NavButton from '../navigation/NavButton.vue'

export default {
  components: { NavButton },
  props: ['sideNavOpen'],
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
}

.nav-button {
  z-index: 10000;
  justify-self: end;
  margin-bottom: -16px;
}

.header {
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
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
  width: 98%;
  height: 98%;
  object-fit: contain;
  margin-bottom: 64px;
  justify-self: center;
}

.sns {
  display: none;
}

.text-box {
  display: grid;
  gap: 8px;
  font-size: 18px;
  color: $white;

  .date {
    span {
      font-size: 30px;
      font-weight: 700;
      margin-right: 1px;
    }
  }
}

@include mq(sm) {
  .nav-button {
    margin-bottom: 24px;
  }
  .logo {
    width: 85%;
    height: 85%;
    margin-bottom: 48px;
  }

  .text-box {
    font-size: 24px;

    .date span {
      font-size: 36px;
    }
  }
}

@include mq() {
  .header {
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

  .grid {
    align-content: center;
    grid-template-columns: 45fr 55fr;
  }

  .nav-button {
    display: none;
  }
  .logo {
    width: 100%;
    height: 100%;
    grid-row: 1 / -1;
    margin-bottom: 0;
  }

  .sns {
    display: flex;
    gap: 48px;
    grid-row: 1;
    grid-column: 2;
    justify-self: end;

    img {
      display: inline-block;
      width: 32px;
      height: 32px;
    }
  }

  .text-box {
    text-align: right;
    justify-content: end;
    align-content: end;
    grid-row: 1;
    grid-column: 2;
  }
}
</style>
