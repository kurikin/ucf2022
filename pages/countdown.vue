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
          <span class="value">2022</span><span class="unit">年</span
          ><span class="value"> 6</span><span class="unit">月</span
          ><span class="value"> 26</span><span class="unit">日（日）</span>
        </p>
        <p class="desc">
          横浜国立大学都市科学部<br />オープンキャンパス同時開催
        </p>
      </div>
      <div class="countdown-box">
        <p class="countdown-title">ホームページ公開まで...</p>
        <countdown
          class="countdown-content"
          :transform="transform"
          :time="2 * 24 * 60 * 60 * 1000"
        >
          <template slot-scope="props"
            ><span class="value">{{ props.days }}</span>
            <span class="unit">日</span>
            <span class="value">{{ props.hours }}</span>
            <span class="unit">時間</span>
            <span class="value">{{ props.minutes }}</span>
            <span class="unit">分</span>
            <span class="value">{{ props.seconds }}</span>
            <span class="unit">秒</span></template
          >
        </countdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        // Adds leading zero
        const digits = value < 10 ? `0${value}` : value

        // uses singular form when the value is less than 2
        const word = value < 2 ? key.replace(/s$/, '') : key

        props[key] = digits
      })

      return props
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  grid-template-rows: auto 1.3fr 1fr 1fr;
  align-items: center;
  height: 100%;
  margin: 32px 0;

  @include mq() {
    align-content: center;
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
  display: block;
  width: 285px;
  object-fit: contain;
  justify-self: center;

  @include mq(xs) {
    width: 92%;
    max-width: 380px;
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
  display: flex;
  gap: 32px;
  justify-self: end;
  align-self: start;
  grid-row: 1;
  margin: 12px 0;

  @include mq(sm) {
    gap: 48px;
    margin: 20px 0;
  }
}

.description {
  display: grid;
  gap: 8px;
  font-size: 18px;
  color: $white;
  text-align: center;
  align-items: center;

  @include mq(xs) {
    font-size: 20px;
    gap: 12px;
  }

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
}

.date {
  .unit {
    font-size: 24px;

    @include mq(xs) {
      margin-left: 1px;
    }
  }

  .value {
    font-size: 30px;
    font-weight: 700;
    margin-right: 1px;

    @include mq(xs) {
      font-size: 36px;
    }
  }
}

.sns-link {
  width: 24px;
  height: 24px;

  @include mq(sm) {
    height: 28px;
    width: 28px;
  }
}

.sns-logo {
  width: 100%;
  height: 100%;
}

.countdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  .countdown-title {
    color: $white;
    font-family: 'Zen Antique';
    font-size: 20px;

    @include mq(xs) {
      font-size: 24px;
    }
  }

  .countdown-content {
    color: $white;
    font-size: 30px;
    font-family: 'Zen Antique', monospace;

    .unit {
      font-size: 20px;

      @include mq(sm) {
        font-size: 24px;
      }
    }

    .value {
      display: inline-block;
      width: 30px;

      @include mq(xs) {
        font-size: 36px;
        width: 38px;
      }

      @include mq(sm) {
        font-size: 44px;
        width: 46px;
      }
    }
  }
}
</style>
