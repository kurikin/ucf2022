<template>
  <section class="news container fadeUp animation-4">
    <h2 class="section-heading">新着情報</h2>
    <ul class="news-list">
      <li class="list-item" v-for="(content, index) in contents" :key="index">
        <nuxt-link class="item-link" :to="'/news/' + content.index">
          <span class="date">{{
            $dateFns.format(content.publishedAt, 'yyyy/MM/dd')
          }}</span>
          <p class="title">{{ content.title }}</p>
          <div class="category" :class="categoryColor(content.category)">
            {{ content.category }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['contents'],
  methods: {
    categoryColor(category) {
      if (category === '全体') {
        return 'primary'
      } else {
        return 'secondary'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  text-align: center;
  margin-bottom: 80px;
}

.news-list {
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
  }
}

.list-item {
  &:not(:last-child) {
    border-bottom: 0.5px solid $lightgray;
    padding-bottom: 20px;
  }
}

.item-link {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  font-size: 16px;
  column-gap: 24px;
  row-gap: 4px;
  align-items: flex-start;
  justify-items: flex-start;

  @include mq(sm) {
    grid-template-columns: auto auto 1fr;
    row-gap: 0;
  }

  @include mq() {
    font-size: 18px;
    column-gap: 32px;
  }

  @include mq(lg) {
    font-size: 20px;
    column-gap: 56px;
  }

  .date {
    color: $black;
    font-weight: 600;
  }

  .title {
    color: $black;
    text-align: left;
    grid-column: 2;
    line-height: 1.6;
    grid-row: 1 / 3;

    @include mq(sm) {
      grid-column: 3;
    }
  }

  .category {
    color: $white;
    font-size: 16px;
    padding: 2px 20px;
    border-radius: 8px;
    font-weight: 600;

    &.primary {
      background-color: $primary;
    }

    &.secondary {
      background-color: $secondary;
    }

    @include mq(sm) {
      grid-column: 2;
      padding: 2px 20px;
    }

    @include mq() {
      font-size: 18px;
      padding: 4px 24px;
    }

    @include mq(lg) {
      padding: 4px 32px;
    }
  }
}
</style>
