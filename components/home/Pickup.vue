<template>
  <section class="pickup container fade-up-observe">
    <h2 class="section-heading">ピックアップ企画</h2>
    <ul class="pickup-list">
      <li class="list-item">
        <PickupItem
          title="たたずみたい都市"
          description="お気に入りの風景を募集中"
          imageUri="/events/tatatoshi.jpeg"
          path="/events/tatatoshi"
        />
      </li>
      <li class="list-item">
        <PickupItem
          title="スタジオ診断"
          description="あなたにぴったりのスタジオは？"
          imageUri="/events/studio-analyze.jpeg"
          path="/studios/analyze"
        />
      </li>
      <li class="list-item">
        <PickupItem
          title="優しさの街"
          description="皆を支える都市基盤の魅力とは"
          imageUri="/events/yasashisa.jpeg"
          path="/events/yasashisa"
        />
      </li>
    </ul>
    <nuxt-link class="primary-button" to="/events">企画一覧を見る</nuxt-link>
  </section>
</template>

<script>
import PickupItem from './PickupItem.vue'
export default {
  components: {
    PickupItem,
  },
}
</script>

<style lang="scss" scoped>
.pickup {
  text-align: center;
}

.pickup-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 32px;

  @include mq(sm) {
    flex-direction: row;
    gap: 20px;
  }

  @include mq() {
    margin-bottom: 48px;
  }

  @include mq(lg) {
    margin-bottom: 64px;
    gap: 48px;
  }
}

@include mq(sm) {
  .list-item {
    flex: 1;
  }
}
</style>
