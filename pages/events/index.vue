<template>
  <div class="black-background">
    <BlackHeader
      ><template v-slot:page-title>企<span>画</span>一覧</template></BlackHeader
    >
    <div class="content">
      <div class="container">
        <EventListHeader
          :selectedThemeIndex="selectedThemeIndex"
          @themeChange="themeChange"
          class="fadeUp animation-2"
        />
        <transition-group
          name="list"
          tag="div"
          class="event-list fadeUp animation-3"
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

export default {
  components: { Footer, EventListHeader, EventTile, SpeakersModal },
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

.list-enter-active,
.list-leave-active {
  transition: all 1.2s ease;
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.list-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.list-move {
  transition: transform 1.4s ease-in-out;
}
</style>
