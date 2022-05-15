<template>
  <div class="white-background">
    <div class="expand">
      <WhiteHeader>
        <template v-slot:page-title>ス<span>タ</span>ジオ診断</template>
      </WhiteHeader>
      <div class="container">
        <div class="analyze-background">
          <div v-if="!question.longChoice" class="question-box short-choice">
            <h2 class="question-text">{{ question.questionText }}</h2>
            <div class="button-box">
              <nuxt-link
                class="choice-button"
                :to="'/studios/analyze/' + question.firstChoiceNextPath"
                >{{ question.firstChoice }}</nuxt-link
              >
              <nuxt-link
                class="choice-button"
                :to="'/studios/analyze/' + question.secondChoiceNextPath"
                >{{ question.secondChoice }}</nuxt-link
              >
            </div>
          </div>
          <div v-else class="question-box long-choice">
            <h2 class="question-text">{{ question.questionText }}</h2>
            <div class="choices-box">
              <p class="choice-text">{{ question.firstChoice }}</p>
              <p class="choice-text">
                {{ question.secondChoice }}
              </p>
            </div>
            <div class="button-box">
              <nuxt-link
                class="choice-button"
                :to="'/studios/analyze/' + question.firstChoiceNextPath"
                >A</nuxt-link
              >
              <nuxt-link
                class="choice-button"
                :to="'/studios/analyze/' + question.secondChoiceNextPath"
                >B</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { questions } from '~/assets/constants/questions'

export default {
  computed: {
    questions() {
      return questions
    },
    question() {
      return this.questions[this.id]
    },
  },
  async asyncData({ $content, params }) {
    const id = params.id
    return { id }
  },
}
</script>

<style lang="scss" scoped>
.question-text {
  color: $black;
  font-family: 'Zen Kaku Gothic New';
  font-size: 24px;
  text-align: center;
  font-weight: 600;

  @include mq(sm) {
    font-size: 30px;
  }

  @include mq() {
    font-size: 36px;
  }
}

.question-box.short-choice {
  display: flex;
  flex-direction: column;
  gap: 48px;

  @include mq() {
    gap: 64px;
  }

  @include mq(lg) {
    gap: 96px;
  }
}

.question-box.long-choice {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include mq(sm) {
    gap: 48px;
  }

  @include mq() {
    gap: 64px;
  }

  @include mq(lg) {
    gap: 64px;
  }

  .choices-box {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .choice-text {
    font-size: 18px;

    @include mq(sm) {
      font-size: 20px;
    }

    @include mq() {
      font-size: 24px;
    }
  }
}

.button-box {
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include mq(sm) {
    flex-direction: row;
    gap: 48px;
  }

  @include mq() {
    gap: 64px;
  }

  @include mq(lg) {
    gap: 80px;
  }
}

.choice-button {
  display: inline-block;
  margin: 0 auto;
  color: $white;
  font-size: 18px;
  font-weight: 500;
  background-color: $primary;
  border-radius: 24px;
  padding: 6px 24px;
  border: none;
  letter-spacing: 1px;
  min-width: 160px;
  text-align: center;

  @include mq(sm) {
    padding: 6px 24px;
    min-width: 230px;
  }

  @include mq() {
    font-size: 20px;
    padding: 10px 24px;
    border-radius: 32px;
    min-width: 320px;
  }
}
</style>
