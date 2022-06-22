<template>
  <div class="background">
    <div class="modal-content container">
      <img
        @click="toggleMovieModal()"
        src="/icons/thin-close.svg"
        alt=""
        class="close-icon"
      />
      <div class="youtube-wrapper" v-scroll-lock="movieModalOpen">
        <iframe
          width="560"
          height="315"
          class="youtube"
          src="https://www.youtube.com/embed/5zoL_-T2HZQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['movieModalOpen']),
  },
  methods: {
    ...mapMutations(['toggleMovieModal']),
  },
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  // Larger than hanburder lines by 1
  z-index: 10001;
}

.modal-content {
  max-width: 800px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 16px;
}

.close-icon {
  height: 18px;
  width: 18px;

  &:hover {
    cursor: pointer;
  }

  @include mq(sm) {
    height: 24px;
    width: 24px;
  }
}

.youtube-wrapper {
  margin: 0 auto;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 48px;

  @include mq() {
    margin-bottom: 64px;
  }

  @include mq(lg) {
    margin-bottom: 80px;
  }

  .youtube {
    width: 100%;
    height: 100%;
  }
}
</style>
