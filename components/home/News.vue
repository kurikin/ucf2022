<template>
  <section class="news container fadeUp">
    <h2 class="heading">新着情報</h2>
    <ul class="news-list">
      <li class="list-item" v-for="content in contents" :key="content.id">
        <nuxt-link class="item-link" to="#">
          <span class="date">{{
            $dateFns.format(content.createdAt, 'yyyy/MM/dd')
          }}</span>
          <p class="title">{{ content.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['contents'],
}
</script>

<style lang="scss" scoped>
.news {
  text-align: center;
  margin-bottom: 80px;

  .fadeUp {
    animation-delay: 0.3s;
  }
}

.news-list {
  background-color: $white;
  display: grid;
  gap: 12px;
  width: 100%;
  padding: 20px;
  border-radius: $radius-xs;

  @include mq(sm) {
    padding: 24px;
    border-radius: $radius-sm;
  }

  @include mq(md) {
    border-radius: $radius-md;
  }

  @include mq(lg) {
    padding: 32px;
    gap: 18px;
  }
}
.list-item {
  &:not(:last-child) {
    border-bottom: 0.5px solid $lightgray;
    padding-bottom: 12px;

    @include mq(lg) {
      padding-bottom: 18px;
    }
  }
}

.item-link {
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: left;
  font-size: 16px;
  gap: 16px;

  @include mq() {
    font-size: 18px;
  }

  .date {
    color: $gray;
  }

  .title {
    color: $black;
  }
}
</style>
