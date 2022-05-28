<template>
  <div class="sns fadeIn animation-2">
    <a class="sns-link" href="https://twitter.com/cus_ucf_oc" target="_blank">
      <img class="sns-logo" src="/logos/twitter-brown.svg" alt="" />
    </a>
    <a
      class="sns-link"
      href="https://www.instagram.com/cus_ucf_oc/?hl=ja"
      target="_blank"
    >
      <img class="sns-logo" src="/logos/facebook-brown.svg" alt="" />
    </a>
    <a class="sns-link" href="https://note.com/ucf2022/" target="_blank">
      <img class="sns-logo" src="/logos/note-brown.svg" alt="" />
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
  grid-column: 2;
  justify-self: end;
  align-self: start;

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
