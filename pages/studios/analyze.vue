<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title>ス<span>タ</span>ジオ診断</template>
      <template v-slot:description
        >スタジオ？？よく分からない！！<br />
        そんなあなたにぴったりのスタジオをご紹介します。<br />
        ​まだ見ぬ世界に出会えるかも…！？</template
      >
    </WhiteHeader>
    <Footer />
  </div>
</template>

<script>
import WhiteHeader from '../../components/WhiteHeader.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { WhiteHeader, Footer },
}
</script>

<style lang="scss" scoped></style>
