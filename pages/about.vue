<template>
  <div class="black">
    <BlackHeader>都<span>市</span>文化祭とは</BlackHeader>
    <Slogan />
    <div class="center-line"></div>
    <Theme />
    <div class="center-line"></div>
    <Message />
    <Footer />
  </div>
</template>

<script>
import Slogan from '~/components/about/Slogan'
import Theme from '~/components/about/Theme'
import Message from '~/components/about/Message.vue'

export default {
  components: {
    Slogan,
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
    margin: 52px auto;
  }
}
</style>
