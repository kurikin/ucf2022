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
      <div class="center-line fade-up-observe"></div>
      <Theme class="fade-up-observe" />
      <div class="center-line fade-up-observe"></div>
      <Message class="fade-up-observe" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Theme from '~/components/about/Theme'
import Message from '~/components/about/Message.vue'
import { startObserve } from '~/scripts/observe'

export default {
  head() {
    return {
      title: '都市文化祭とは | 都市文化祭2022 公式ホームページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '「都市」を学び、「都市」で学び、「都市」と学ぶ。あらゆるものが詰まった都市というフィールドで、何を学び、何を考えるのかを、形にし、発信していくイベントが都市文化祭です。',
        },
      ],
    }
  },
  mounted() {
    startObserve()
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
