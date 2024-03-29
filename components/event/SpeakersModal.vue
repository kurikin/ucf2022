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
          <div class="name-box">
            <p class="name">{{ speaker.name }}</p>
            <a
              class="link"
              target="_blank"
              v-if="speaker.hasLink"
              :href="speaker.linkURL"
            >
              <img
                :src="'/logos/' + speaker.linkFileName"
                alt=""
                class="link-img"
              />
            </a>
          </div>
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
  overflow-y: scroll;

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
    overflow-y: auto;
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
}

.name-box {
  display: flex;
  align-items: center;
  gap: 16px;

  @include mq() {
    gap: 24px;
  }

  .name {
    color: $black;
    font-size: 24px;

    @include mq() {
      font-size: 28px;
    }
  }

  .link {
    height: 22px;
    width: 22px;

    @include mq() {
      height: 26px;
      width: 26px;
    }

    .link-img {
      height: 100%;
      width: 100%;
    }
  }
}

.belongs-box {
  display: flex;
  flex-direction: column;
  gap: 2px;

  .belong {
    color: $secondary;
    font-size: 16px;

    @include mq() {
      font-size: 18px;
    }
  }
}
</style>
