<template>
  <section class="timetable container fade-up-observe">
    <h2 class="section-heading">タイムテーブル</h2>
    <img src="timetable.png" alt="" class="timetable-img" />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.timetable {
  text-align: center;
  margin-bottom: 48px;

  @include mq() {
    margin-bottom: 64px;
  }

  @include mq(lg) {
    margin-bottom: 80px;
  }
}

.timetable-img {
  width: 100%;
  max-width: 1050px;
}
</style>
