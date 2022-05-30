<template>
  <div class="container fade-up-observe home-section-margin">
    <h2 class="section-heading">YouTubeライブ</h2>
    <div class="youtube-wrapper">
      <iframe
        class="youtube"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rHnOaHtJPHo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.youtube-wrapper {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid $white;
  margin-bottom: 48px;

  @include mq() {
    margin-bottom: 64px;
  }

  @include mq(lg) {
    margin-bottom: 80px;
  }

  .youtube {
    width: 100%;
    height: 100%;
  }
}
</style>
