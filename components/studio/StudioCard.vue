<template>
  <div class="studio-card" @click="showModal">
    <img
      v-if="!studioSecretOn"
      :src="'/teachers/' + studioData.englishName + '.jpeg'"
      alt=""
      class="teacher-img"
    />
    <img v-else :src="'/teachers/miura.jpeg'" alt="" class="teacher-img" />
    <div class="text-box">
      <p v-if="!studioSecretOn" class="teacher-name">
        {{ studioData.teacherName }}
      </p>
      <p v-else class="teacher-name">三浦 倫平</p>
      <p v-if="!studioSecretOn" class="hashtags">
        <span
          v-for="hashtag in studioData.hashtags"
          :key="hashtag.teaherName"
          class="hashtag"
          >{{ hashtag }}</span
        >
      </p>
      <p v-else class="hashtags">
        <span
          v-for="hashtag in miuraStudioData.hashtags"
          :key="hashtag.teaherName"
          class="hashtag"
          >{{ hashtag }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    showModal() {
      if (this.studioSecretOn) {
        this.setStudioModalData(this.miuraStudioData)
      } else {
        this.setStudioModalData(this.studioData)
      }
      this.toggleStudioModal()
    },
    ...mapMutations(['setStudioModalData', 'toggleStudioModal']),
  },
  computed: {
    ...mapState(['studioSecretOn']),
  },
  data() {
    return {
      miuraStudioData: {
        teacherName: '三浦 倫平',
        englishName: 'miura',
        lastName: '三浦',
        hasStudioImage: true,
        hashtags: [
          '#都市社会学',
          '#貧困',
          '#高学歴ワーキングプア',
          '#デモ',
          '#社会運動',
          '#東京',
          '#孤独',
        ],
        description:
          '三浦スタジオでは、都市に関する研究を個人個人で進め、年度末に冊子にまとめます。テーマは自由で、谷根千や池袋など場所に関するものや、観光や都市開発に関するもの、さらに筆者自身は子育てコミュニティを分析しました。研究は、文献を読み込んで比較したり、対象者にインタビューをしたりと各々進めていくので、ゼミの時間は参考になる文献の輪読や、個人の進捗報告を深ぼっていました。加えて、現地フィールドワークも2回行ったりと、現場感も大切にしています。',
      },
    }
  },
  props: {
    studioData: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.studio-card {
  display: flex;
  width: 100%;
  max-width: 270px;
  height: 100%;
  padding: 8px;
  overflow: hidden;
  background-color: #fff;
  flex-direction: column;
  border-radius: $radius-sm;

  &:hover {
    cursor: pointer;
  }

  @include mq(xs) {
    max-width: 471px;
  }

  @include mq(sm) {
    border-radius: $radius-md;
    max-width: 313.5px;
  }

  @include mq() {
    max-width: 408.5px;
  }

  @include mq(lg) {
    max-width: 311.3px;
  }
}

.text-box {
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  gap: 12px;
}

.teacher-img {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: $radius-sm;
  border-top-right-radius: $radius-sm;
  border-bottom-left-radius: $radius-xxs;
  border-bottom-right-radius: $radius-xxs;
}

.teacher-name {
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  @include mq(sm) {
    font-size: 24px;
  }
}

.hashtags {
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  padding: 0 16px;

  @include mq() {
    column-gap: 12px;
    row-gap: 4px;
  }

  @include mq(lg) {
    column-gap: 16px;
  }
}

.hashtag {
  font-size: 16px;
  color: $secondary;

  @include mq() {
    font-size: 18px;
  }
}

.modal {
  height: 100vh;
  width: 100vh;
  position: fixed;
  z-index: 1000;
}
</style>
