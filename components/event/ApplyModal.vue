<template>
  <BaseModal :modalOpen="applyModalOpen">
    <div v-scroll-lock="applyModalOpen" class="modal-content">
      <h1 class="modal-title">参加方法</h1>
      <button class="close-modal-button" @click="toggleApplyModal">
        <span class="close-text">閉じる</span
        ><img class="close-icon" src="/icons/close.svg" alt="" />
      </button>
      <div class="sns-apply-box">
        <h2 class="apply-heading">1. Twitter/Instagramで参加</h2>
        <p class="description">
          Twitter/Instagramで、<br />
          ① ハッシュタグ「#都市文化祭2022」「#たたとし」<br
            class="show-over-sm"
          />② 撮影場所 <br class="show-over-sm" />③ コメント（任意）
          <br
            class="show-over-sm"
          />をつけて投稿すると、都市文化祭ホームページに写真が掲載されます。<br />
          <span>
            ※アカウント名がニックネームとして掲載されます。あらかじめご了承ください。</span
          >
        </p>
      </div>
      <div class="form-apply-box">
        <h2 class="apply-heading">2. Googleフォームで参加</h2>
        <p class="description">
          参加用Googleフォームからも写真を投稿できます。
        </p>
      </div>
      <button @click="openForm()" class="primary-button google-form-button">
        Googleフォーム
      </button>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from '~/components/BaseModal.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: { BaseModal },

  computed: {
    ...mapState(['applyModalOpen']),
  },
  methods: {
    openForm() {
      window.open('https://forms.gle/edwn2nTkRX84DHaU8', '_blank')
    },
    ...mapMutations(['toggleApplyModal']),
  },
}
</script>

<style lang="scss" scoped>
.modal-content {
  display: grid;
  overflow-y: scroll;
  gap: 20px;
  grid-template-columns: 1fr auto;
  align-items: center;

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
    grid-template-columns: 60fr 40fr;
  }
}
.modal-title {
  color: $black;
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 500;
  grid-row: 1;

  @include mq() {
    font-size: 36px;
    letter-spacing: 5px;
  }
}

.apply-heading {
  font-family: 'Zen Kaku Gothic New';
  color: $black;
  font-size: 20px;
  font-weight: 600;

  @include mq() {
    font-size: 24px;
  }
}

.sns-apply-box,
.form-apply-box {
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include mq() {
    gap: 16px;
  }
}

.form-apply-box {
  grid-row: 3;
}

.description {
  font-size: 16px;

  span {
    color: $primary;
  }

  @include mq() {
    font-size: 18px;
    line-height: 1.6;
  }
}

.google-form-button {
  grid-column: 1 / 3;
  padding: 8px 32px;
  margin-top: 4px;

  @include mq() {
    padding: 10px 48px;
  }

  @include mq(lg) {
    grid-column: 2;
    grid-row: 3;
    align-self: center;
    justify-self: end;
    margin: 0;
  }
}
</style>
