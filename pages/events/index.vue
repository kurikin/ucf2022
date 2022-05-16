<template>
  <div class="black-background">
    <BlackHeader
      ><template v-slot:page-title>企<span>画</span>一覧</template></BlackHeader
    >
    <div class="expand container">
      <EventListHeader
        :selectedThemeIndex="selectedThemeIndex"
        @themeChange="themeChange"
      />
      <div class="event-list">
        <EventTile
          v-for="eventData in matchedEvents"
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
import { themeList } from '~/assets/constants/theme'

export default {
  components: { Footer, EventListHeader, EventTile },
  data() {
    return {
      selectedThemeIndex: 0,
    }
  },
  methods: {
    themeChange(index) {
      this.selectedThemeIndex = index
    },
  },
  computed: {
    matchedEvents() {
      if (this.selectedThemeIndex === 0) {
        return events
      }

      return events.filter(
        (e) => e.theme === themeList[this.selectedThemeIndex]
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.event-list {
  display: flex;
  flex-direction: column;
  gap: 48px;

  @include mq() {
    gap: 64px;
  }

  @include mq(lg) {
    gap: 80px;
  }
}
</style>
