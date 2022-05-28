<template>
  <div class="sns fadeIn animation-2">
    <a class="sns-link" href="https://twitter.com/ynu_cvg" target="_blank">
      <img class="sns-logo" src="/logos/twitter-brown.svg" alt="" />
    </a>
    <a class="sns-link" href="https://instagram.com/ynu_cvg" target="_blank">
      <img class="sns-logo" src="/logos/instagram-brown.svg" alt="" />
    </a>
    <a class="sns-link" href="https://facebook.com/ynu.cvg" target="_blank">
      <img class="sns-logo" src="/logos/facebook-brown.svg" alt="" />
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sns {
  display: flex;
  gap: 32px;
  grid-row: 1;

  .sns-link {
    width: 24px;
    height: 24px;
  }

  .sns-logo {
    width: 100%;
    height: 100%;
  }
}
</style>
