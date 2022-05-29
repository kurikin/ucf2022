<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:no-animation-page-title
        >ス<span>タ</span>ジオ診断</template
      >
    </WhiteHeader>
    <div class="no-margin-content container">
      <div class="analyze-background">
        <div v-if="!question.longChoice" class="question-box short-choice">
          <h2 class="question-text fadeIn animation-1">
            {{ question.questionText }}
          </h2>
          <div class="button-box">
            <nuxt-link
              class="choice-button fadeIn animation-2"
              :to="'/studios/analyze/' + question.firstChoiceNextPath"
              >{{ question.firstChoice }}</nuxt-link
            >
            <nuxt-link
              class="choice-button fadeIn animation-2"
              :to="'/studios/analyze/' + question.secondChoiceNextPath"
              >{{ question.secondChoice }}</nuxt-link
            >
          </div>
        </div>
        <div v-else class="question-box long-choice">
          <h2 class="question-text fadeIn animation-1">
            {{ question.questionText }}
          </h2>
          <div class="choices-box">
            <p class="choice-text fadeIn animation-2">
              {{ question.firstChoice }}
            </p>
            <p class="choice-text fadeIn animation-2">
              {{ question.secondChoice }}
            </p>
          </div>
          <div class="button-box">
            <nuxt-link
              class="choice-button fadeIn animation-2"
              :to="'/studios/analyze/' + question.firstChoiceNextPath"
              >A</nuxt-link
            >
            <nuxt-link
              class="choice-button fadeIn animation-2"
              :to="'/studios/analyze/' + question.secondChoiceNextPath"
              >B</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div />
    <Footer />
  </div>
</template>

<script>
import { questions } from '~/assets/constants/question'
import { startObserve } from '~/scripts/observe'

export default {
  mounted() {
    startObserve()
  },
  async asyncData({ params }) {
    const id = params.id
    const question = questions[id]

    return { question }
  },
}
</script>

<style lang="scss" scoped>
.question-box {
  width: 100%;

  @include mq() {
    padding: 0 24px;
  }

  @include mq(lg) {
    padding: 0 64px;
  }
}

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
    gap: 32px;
  }

  @include mq() {
    gap: 48px;
  }

  .choices-box {
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: -8px;

    @include mq() {
      margin-top: -16px;
    }
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
  gap: 24px;

  @include mq(sm) {
    flex-direction: row;
    gap: 48px;
  }

  @include mq() {
    justify-content: space-between;
  }
}

.choice-button {
  display: inline-block;
  margin: 0 auto;
  color: $white;
  font-size: 20px;
  font-weight: 600;
  background-color: $primary;
  border-radius: 24px;
  padding: 8px 0px;
  border: none;
  letter-spacing: 1px;
  min-width: 230px;
  text-align: center;

  @include mq(sm) {
    padding: 6px 0px;
    width: 100%;
    min-width: auto;
    margin: 0;
  }

  @include mq() {
    font-size: 20px;
    padding: 12px 0px;
    border-radius: 32px;
    max-width: 350px;
  }
}

.no-margin-content {
  display: flex;
  flex-direction: column;
}
</style>
