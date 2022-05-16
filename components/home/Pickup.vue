<template>
  <section class="pickup container fadeUp animation-5">
    <h2 class="section-heading">ピックアップ企画</h2>
    <ul class="pickup-list">
      <li class="list-item">
        <PickupItem
          :title="'たたずみたい都市'"
          :description="'お気に入りの風景を募集中'"
          :imageUri="'/events/tatatoshi.jpeg'"
          :path="'/events/tatatoshi'"
        />
      </li>
      <li class="list-item">
        <PickupItem :title="'Coming soon...'" :description="'More Programs'" />
      </li>
      <li class="list-item">
        <PickupItem :title="'Coming soon...'" :description="'More Programs'" />
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
  margin-bottom: 64px;
}

@include mq(sm) {
  .pickup-list {
    flex-direction: row;
    gap: 20px;
  }

  .list-item {
    flex: 1;
  }
}

@include mq(lg) {
  .pickup-list {
    gap: 48px;
  }
}
</style>
