<template>
  <div class="black">
    <Header>都<span>市</span>文化祭とは</Header>
    <Slogan />
    <div class="center-line"></div>
    <Theme />
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
  margin: 0 auto;
  margin-bottom: 32px;
}
</style>
