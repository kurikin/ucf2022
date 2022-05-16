<template>
  <div class="black-background">
    <BlackHeader
      ><template v-slot:page-title>企<span>画</span>一覧</template></BlackHeader
    >
    <div class="expand container">
      <EventListHeader />
      <div class="event-list">
        <EventTile
          v-for="eventData in events"
          :eventData="eventData"
          :key="eventData.title"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import EventListHeader from '~/components/event/EventListHeader.vue'
import EventTile from '../../components/event/EventTile.vue'
import { events } from '~/assets/constants/event'

export default {
  components: { Footer, EventListHeader, EventTile },
  computed: {
    events() {
      return events
    },
  },
}
</script>

<style lang="scss" scoped></style>
