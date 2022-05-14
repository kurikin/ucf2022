<template>
  <BaseModal :modalOpen="modalOpen">
    <h1 class="modal-title">参加方法</h1>
    <button class="close-modal-button" @click="closeApplyModal">
      <span class="close-text">閉じる</span
      ><img class="close-icon" src="/icons/close.svg" alt="" />
    </button>
    <div class="sns-apply-box">
      <h2 class="apply-heading">1. Twitter/Instagramで参加</h2>
      <p class="description">
        Twitter/Instagramで、<br />
        ① ハッシュタグ「#都市文化祭2022」「#たたとし」② 撮影場所
        ③コメント（任意）
        をつけて投稿すると、都市文化祭ホームページに写真が掲載されます。<br />
        <span>
          ※アカウント名がニックネームとして掲載されます。あらかじめご了承ください。</span
        >
      </p>
    </div>
    <div class="form-apply-box">
      <h2 class="apply-heading">2. Googleフォームで参加</h2>
      <p class="description">参加用Googleフォームからも写真を投稿できます。</p>
    </div>
    <button class="primary-button google-form-button">Googleフォーム</button>
  </BaseModal>
</template>

<script>
import BaseModal from '~/components/BaseModal.vue'

export default {
  components: { BaseModal },
  props: {
    modalOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeApplyModal() {
      this.$emit('closeApplyModal')
    },
  },
}
</script>

<style lang="scss" scoped>
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
