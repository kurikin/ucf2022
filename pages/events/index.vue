<template>
  <div class="black-background">
    <BlackHeader
      ><template v-slot:page-title>企<span>画</span>一覧</template></BlackHeader
    >
    <div class="expand container">
      <EventListHeader />
      <div class="event-list">
        <EventTile />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import EventListHeader from '~/components/event/EventListHeader.vue'
import EventTile from '../../components/event/EventTile.vue'
export default { components: { Footer, EventListHeader, EventTile } }
</script>

<style lang="scss" scoped></style>
