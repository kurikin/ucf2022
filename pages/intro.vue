<template>
  <div class="black">
    <BlackHeader>都<span>市</span>文化祭とは</BlackHeader>
    <Slogan />
    <div class="center-line"></div>
    <Theme />
    <div class="center-line"></div>
    <Footer />
  </div>
</template>

<script>
import Slogan from '~/components/intro/Slogan'
import Theme from '~/components/intro/Theme'

export default {
  components: {
    Slogan,
    Theme,
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
    margin: 52px auto;
  }
}
</style>
