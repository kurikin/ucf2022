<template>
  <div class="black-background">
    <BlackHeader
      ><template v-slot:page-title>企<span>画</span>一覧</template></BlackHeader
    >
    <div class="container">
      <div class="content">
        <EventListHeader
          :selectedThemeIndex="selectedThemeIndex"
          @themeChange="themeChange"
          class="observe-fade-up"
        />
        <transition-group
          name="list"
          tag="div"
          class="event-list observe-fade-up"
        >
          <EventTile
            v-for="eventData in matchedEvents"
            :eventData="eventData"
            :key="eventData.title"
          />
        </transition-group>
      </div>
    </div>
    <transition name="component-fade">
      <SpeakersModal v-if="speakersModalOpen" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import EventListHeader from '~/components/event/EventListHeader.vue'
import EventTile from '../../components/event/EventTile.vue'
import { events } from '~/assets/constants/event'
import { themeList } from '~/assets/constants/theme'
import SpeakersModal from '~/components/event/SpeakersModal.vue'
import { mapState } from 'vuex'
import { startObserve } from '~/scripts/observe'

export default {
  components: { Footer, EventListHeader, EventTile, SpeakersModal },
  mounted() {
    startObserve('observe-fade-up')
  },
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
    events() {
      return events
    },
    matchedEvents() {
      if (this.selectedThemeIndex === 0) {
        return this.events
      }

      return this.events.filter(
        (e) => e.theme === themeList[this.selectedThemeIndex]
      )
    },
    ...mapState(['speakersModalOpen']),
  },
}
</script>

<style lang="scss" scoped>
.event-list {
  position: relative;
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

.list-enter-active {
  transition: opacity 1.2s ease;
}

.list-leave-active {
  position: absolute;
  top: 0;
  transition-property: opacity transform;
  transition-duration: 1.2s;
  transition-timing-function: ease;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.list-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.list-move {
  transition: transform 1.4s ease-in-out;
}
</style>
