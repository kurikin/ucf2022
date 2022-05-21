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
        <p class="title">ホームページ公開まで...</p>
        <countdown class="counter" :transform="transform" :time="time">
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
  data() {
    const now = new Date()
    const release = new Date('2022-06-01T00:00:00.000+09:00')

    return {
      time: release - now,
    }
  },
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

.grid {
  grid-template-rows: auto 1.3fr 1fr 1fr;
  align-items: center;
  height: 100%;
  margin: 32px 0;

  @include mq() {
    height: auto;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    row-gap: 80px;
  }

  @include mq(lg) {
    row-gap: 96px;
  }
}

.logo {
  display: block;
  width: 285px;
  object-fit: contain;
  justify-self: center;

  @include mq(xs) {
    width: 92%;
    max-width: 300px;
  }

  @include mq() {
    justify-self: start;
    max-width: 530px;
    margin-top: 0;
    grid-row: 1 / 3;
    grid-column: 1;
    margin-bottom: 0;
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

  @include mq() {
    grid-row: 1;
    grid-column: 2;
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
    align-self: flex-end;

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

  @include mq() {
    height: 32px;
    width: 32px;
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
  font-family: 'Zen Antique';

  @include mq() {
    grid-column: 1 / -1;
    gap: 8px;
  }

  .title {
    color: $white;
    font-size: 20px;

    @include mq(xs) {
      font-size: 24px;
    }

    @include mq() {
      font-size: 30px;
    }
  }

  .counter {
    color: $white;

    .unit {
      font-size: 20px;

      @include mq(sm) {
        font-size: 24px;
      }

      @include mq() {
        font-size: 30px;
      }

      @include mq(lg) {
        font-size: 36px;
      }
    }

    .value {
      display: inline-block;
      font-size: 30px;
      width: 34px;
      text-align: right;

      @include mq(xs) {
        font-size: 36px;
        width: 40px;
      }

      @include mq(sm) {
        font-size: 44px;
        width: 52px;
      }

      @include mq() {
        font-size: 52px;
        width: 60px;
      }

      @include mq(lg) {
        font-size: 62px;
        width: 82px;
      }
    }
  }
}
</style>
