<template>
  <div class="black-background">
    <BlackHeader
      ><template v-slot:page-title>都<span>市</span>文化祭とは</template>
      <template v-slot:description>
        <p>「都市」を学び、<br />「都市」で学び、<br />「都市」と学ぶ。</p>
        <p>
          あらゆるものが詰まった都市というフィールドで、<br />
          何を学び、何を考えるのかを、形にし、<br />
          発信していくイベントが都市文化祭です。<br />
        </p>
      </template>
    </BlackHeader>
    <div class="content">
      <!-- <div class="center-line fadeUp animation-3"></div>
      <Theme class="fadeUp animation-4" />
      <div class="center-line fadeUp animation-5"></div> -->
      <div class="center-line observe-fadeIn"></div>
      <Theme class="observe-fadeIn" />
      <div class="center-line observe-fadeIn"></div>
      <Message class="observe-fadeIn" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Theme from '~/components/about/Theme'
import Message from '~/components/about/Message.vue'

export default {
  mounted() {
    var targets = document.querySelectorAll('.observe-fadeIn') //監視対象を選択
    var targetsArray = Array.prototype.slice.call(targets) //監視対象を配列に変換（IE対策）

    //IntersectionObserverに渡すコールバック関数
    var cb = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //画面内に入った時に処理開始
          entry.target.classList.add('show') //画面内に入った要素にshowクラスを付与
          observer.unobserve(entry.target) //一度発火した後監視を止める
        }
      })
    }
    var options = {
      rootMargin: '0px 0px',
    }

    //IntersectionObserver初期化
    var io = new IntersectionObserver(cb, options)

    targetsArray.forEach((el) => {
      io.observe(el)
    })
  },
  components: {
    Theme,
    Message,
  },
}
</script>

<style lang="scss" scoped>
.center-line {
  width: 1px;
  height: 100px;
  background-color: $white;
  margin: 32px auto;
}

@include mq() {
  .center-line {
    height: 180px;
    margin: 48px auto;
  }
}
</style>
