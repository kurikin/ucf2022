<template>
  <BaseModal :modalOpen="speakersModalOpen">
    <div class="modal-content" v-scroll-lock="speakersModalOpen">
      <h1 class="event-name">{{ speakersModalData.eventName }}</h1>
      <button class="close-modal-button" @click="closeModal">
        <span class="close-text">閉じる</span
        ><img class="close-icon" src="/icons/close.svg" alt="" />
      </button>
      <ul class="speakers-list">
        <li v-for="(speaker, index) in speakers" :key="index" class="speaker">
          <p class="name">{{ speaker.name }}</p>
          <div class="belongs-box">
            <p
              v-for="(belong, index) in speaker.belongs"
              :key="index"
              class="belong"
            >
              {{ belong }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </BaseModal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    closeModal() {
      this.toggleSpeakersModal()
    },
    ...mapMutations(['toggleSpeakersModal']),
  },
  computed: {
    speakers() {
      return this.speakersModalData.speakers
    },
    ...mapState(['speakersModalOpen', 'speakersModalData']),
  },
}
</script>

<style lang="scss" scoped>
.modal-content {
  display: grid;
  gap: 20px;
  overflow: scroll;

  @include mq(sm) {
    gap: 24px;
    align-items: start;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  @include mq() {
    column-gap: 32px;
    row-gap: 32px;
    align-items: flex-start;
  }
}

.event-name {
  color: $black;
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 500;

  @include mq() {
    letter-spacing: 5px;
    font-size: 36px;
  }
}

.speakers-list {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @include mq(sm) {
    gap: 16px;
  }

  @include mq() {
    gap: 24px;
  }
}

.speaker {
  display: flex;
  flex-direction: column;
  gap: 4px;

  .name {
    color: $black;
    font-size: 24px;
  }
}

.belong {
  color: $secondary;
  font-size: 16px;

  @include mq() {
    font-size: 20px;
  }
}

.belongs-box {
  display: flex;
  flex-direction: column;
}
</style>
