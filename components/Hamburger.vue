<template>
  <div class="hamburger">
    <!-- ハンバーガーメニュー -->
    <div class="lines" @click="isOpen = !isOpen" :class="{ open: isOpen }">
      <span class="line line1" :class="lineColor"></span>
      <span class="line line2" :class="lineColor"></span>
      <span class="line line3" :class="lineColor"></span>
    </div>
    <!-- サイドナビゲーション-->
    <div class="sidenav-container">
      <!-- サイドバーのバックドロップ背景 -->
      <div v-if="isOpen" @click="isOpen = false" class="sidenav-backdrop"></div>
      <!-- トランジション -->
      <transition name="slide-side">
        <!-- サイドナビゲーション -->
        <div v-if="isOpen" class="sidenav">
          <div class="nav-container">
            <h3 class="genre-title">MENU</h3>
            <ul class="nav-list" @click="isOpen = false">
              <li class="nav-item">
                <nuxt-link to="/">HOME</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/about">都市文化祭とは</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/events">企画一覧</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/departments">学科紹介</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/studios">スタジオ紹介</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="nav-container">
            <h3 class="genre-title">GUIDE</h3>
            <ul class="nav-list">
              <li class="nav-item">
                <nuxt-link to="/members">実行委員一覧</nuxt-link>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.ynu.ac.jp/access/index.html"
                  target="_blank"
                  >アクセス</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.cus.ynu.ac.jp/exam/exam/examinfo.html"
                  target="_blank"
                  >入試情報</a
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/contact">お問合せ</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="sns">
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
            <a
              class="sns-link"
              href="https://note.com/ucf2022/"
              target="_blank"
            >
              <img class="sns-logo" src="/logos/note.svg" alt="" />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    lineColor() {
      if (this.baseColor === 'black') {
        return this.isOpen ? 'white' : 'black'
      } else {
        return this.isOpen ? 'white' : 'white'
      }
    },
  },
  props: {
    baseColor: {
      type: String,
      default: 'black',
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.isOpen ? 'side-nav-open' : '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  z-index: 1000;
}

.lines {
  position: fixed;
  top: 30px;
  right: 25px;
  z-index: 10000;

  height: 22px;
  width: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include mq(sm) {
    top: 36px;
    right: 28px;
  }

  @include mq(md) {
    display: none;
  }

  .line {
    display: block;
    height: 2.2px;
    width: 100%;
    border-radius: 2px;

    &.white {
      background: $white;
    }

    &.black {
      background: $black;
    }
  }

  .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .line2 {
    transition: transform 0.1s ease-in-out;
  }

  .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  &.open {
    .line1 {
      transform: rotate(45deg);
    }

    .line2 {
      transform: scaleY(0);
    }
    .line3 {
      transform: rotate(-45deg);
    }
  }
}

/* ### ハンバーガーメニュー ### */
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: hsla(200, 100%, 14%, 0.2);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  display: flex;
  position: fixed;
  box-sizing: border-box;
  background-color: $secondary;
  justify-content: space-around;
  z-index: 1000;
  top: 0;
  right: 0;
  padding: 28px;
  padding-top: 40px;
  flex-direction: column;
  gap: 18px;

  @include mqh() {
    padding-top: 52px;
    gap: 32px;
  }
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}

.genre-title {
  font-size: 24px;
  width: 85%;
  font-family: 'Zen Antique';
  letter-spacing: 4px;
  font-weight: 400;
  border-bottom: 1px solid;
  text-align: left;
  border-color: hsla(0, 0%, 100%, 1);
  padding-bottom: 2px;
  margin-bottom: 16px;

  @include mqh() {
    margin-bottom: 24px;
  }
}
.nav-list {
  display: grid;
  list-style: none;
  color: $white;
  text-align: left;
  gap: 8px;

  @include mqh() {
    gap: 12px;
  }
}

.nav-item {
  padding-bottom: 6px;
  font-size: 18px;
  font-weight: 500;

  a {
    color: $white;
  }
}

// SNS リンク
.sns {
  display: flex;
  gap: 32px;
  margin-top: 6px;

  @include mqh() {
    margin-top: 12px;
  }
}

.sns-link {
  width: 24px;
  height: 24px;
}

.sns-logo {
  width: 100%;
  height: 100%;
}
</style>
