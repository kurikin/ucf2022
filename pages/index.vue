<template>
  <div>
    <!-- ヘッダー -->
    <header class="header">
      <div class="container grid">
        <NavButton class="nav-button" />
        <img class="logo" src="logo.png" alt="" />
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
  </div>
</template>

<script>
import NavButton from '~/components/navigation/NavButton.vue'

export default {
  name: 'IndexPage',
  components: {
    NavButton,
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
}

.nav-button {
  justify-self: end;
  margin-bottom: -16px;
}

.header {
  width: 100%;
  background: linear-gradient(
      hsla(200, 100%, 11%, 0.8),
      hsla(200, 100%, 11%, 0.8)
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
    margin-bottom: 0;
  }

  .text-box {
    justify-content: end;
    align-content: end;
  }
}
</style>
