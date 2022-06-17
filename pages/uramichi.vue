<template>
  <div class="white-background">
    <WhiteHeader :hasSecondSlot="true">
      <template v-slot:page-title>裏<span>道</span>探索</template>
      <template v-slot:description
        ><p>
          横浜国立大学には多くの道がある。<br />
          あなたの知らない楽しい道を誰かは知っているかもしれない。<br />
          裏道を通して横浜国立大学の新たな一面を探しにいきましょう。
        </p></template
      >
    </WhiteHeader>
    <div class="content container">
      <img src="/uramichi/campus.png" alt="" class="campus-img" />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}
.campus-img {
  width: 100%;
  max-width: 750px;
}
</style>
