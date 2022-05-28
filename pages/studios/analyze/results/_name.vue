<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:no-animation-page-title
        >ス<span>タ</span>ジオ診断</template
      >
    </WhiteHeader>
    <div class="no-margin-content">
      <div class="container">
        <div class="analyze-background">
          <div class="result-box">
            <h2 class="title fadeIn animation-1">診断結果</h2>
            <div class="result-text fadeIn animation-2">
              <p class="leading">あなたにおすすめのスタジオは...</p>
              <h3 class="studio-name">{{ studioData.lastName }}スタジオ</h3>
            </div>
            <img
              class="teacher-img fadeIn animation-2"
              :src="'/teachers/' + studioData.englishName + '.jpeg'"
              alt=""
            />
            <div class="button-box fadeIn animation-3">
              <button
                class="result-button"
                @click="showStudioModal(studioData)"
              >
                スタジオの詳細を見る
              </button>
              <button class="result-button" @click="analyzeAgain()">
                もう一度診断する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="component-fade">
      <StudioModal v-if="studioModalOpen" />
    </transition>
    <StudioFloat />
    <Footer />
  </div>
</template>

<script>
import { getStudioByName } from '~/assets/constants/studio'
import { mapState, mapMutations } from 'vuex'
import StudioModal from '~/components/studio/StudioModal.vue'
import StudioFloat from '~/components/studio/StudioFloat.vue'

export default {
  methods: {
    showStudioModal(studioData) {
      this.setStudioModalData(studioData)
      this.toggleStudioModal()
    },
    analyzeAgain() {
      this.$router.push('/studios/analyze')
    },
    ...mapMutations(['setStudioModalData', 'toggleStudioModal']),
  },
  computed: {
    studioData() {
      return getStudioByName(this.name)[0]
    },
    ...mapState(['studioModalOpen']),
  },
  async asyncData({ params }) {
    const name = params.name
    return { name }
  },
  components: {
    StudioModal,
    StudioFloat,
  },
}
</script>

<style lang="scss" scoped>
.result-box {
  display: grid;
  gap: 24px;
  width: 100%;
  justify-content: center;

  @include mq(sm) {
    gap: 32px;
  }

  @include mq() {
    gap: 48px;
  }

  @include mq(lg) {
    grid-template-columns: auto 1fr;
    row-gap: 64px;
    column-gap: 80px;
  }
}

.title {
  font-size: 36px;
  color: $black;
  text-align: center;
  letter-spacing: 4px;

  @include mq(sm) {
    font-size: 36px;
  }

  @include mq() {
    font-size: 44px;
  }

  @include mq(lg) {
    grid-column: 1 / -1;
    font-size: 52px;
  }
}

.result-text {
  display: flex;
  flex-direction: column;
  gap: 4px;

  @include mq(lg) {
    align-items: flex-start;
    gap: 12px;
  }

  .leading {
    font-size: 18px;
    color: $black;
    text-align: center;
    font-weight: 500;

    @include mq(sm) {
      font-size: 20px;
    }

    @include mq() {
      font-size: 24px;
    }

    @include mq(lg) {
      font-size: 30px;
      grid-row: 2;
    }
  }

  .studio-name {
    font-family: 'Zen Kaku Gothic New';
    text-align: center;
    font-size: 30px;
    color: $primary;
    font-weight: 600;

    @include mq(sm) {
      font-size: 36px;
    }

    @include mq() {
      font-size: 44px;
    }

    @include mq(lg) {
      font-size: 52px;
    }
  }
}

.teacher-img {
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
  border-radius: $radius-sm;
  max-width: 400px;
  object-fit: cover;

  @include mq() {
    max-width: 500px;
  }

  @include mq(lg) {
    grid-column: 1;
    grid-row: 2 / 4;
    width: 330px;
  }
}

.button-box {
  display: flex;
  flex-direction: column;
  gap: 24px;

  @include mq(sm) {
    gap: 32px;
  }

  @include mq() {
    gap: 32px;
  }

  @include mq(lg) {
    grid-column: 2;
    grid-row: 3;
    flex-direction: row;
    align-self: flex-end;
  }
}

.result-button {
  background-color: $secondary;
  color: $white;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  border-radius: 28px;
  padding: 8px 0;

  @include mq(sm) {
    font-size: 20px;
    padding: 8px 16px;
  }

  @include mq() {
    padding: 10px 16px;
  }
}
</style>
