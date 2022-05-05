<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title>た<span>た</span>ずみたい都市</template>
      <template v-slot:custom>
        <div class="header-bottom-box">
          <p class="description">
            みなさんが「たたずみたい」と思う都市の写真を集める企画です。<br />
            自分の周りの都市・地域を見つめなおしてみませんか？<br />
            自分の知らない都市・地域を知ってみませんか？
          </p>
          <button class="primary-button how-to-apply">
            参加方法はこちら！
          </button>
        </div>
      </template>
    </WhiteHeader>
    <ImageGallery :contents="contents" @showImageModal="showImageModal" />
    <ImageModal
      v-show="imageModalOpen"
      :modalOpen="imageModalOpen"
      :imageModalData="imageModalData"
      @closeImageModal="closeImageModal"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import ImageGallery from '../../components/event/ImageGallery.vue'
import ImageModal from '~/components/event/ImageModal.vue'

export default {
  components: { Footer, ImageGallery, ImageModal },
  data() {
    return {
      imageModalOpen: false,
      imageModalData: {
        id: '',
        nickname: '',
        comment: '',
        image: {
          url: '/comingsoon.jpeg',
        },
      },
      applyModalOpen: false,
    }
  },
  methods: {
    showImageModal(content) {
      this.imageModalData = content
      this.imageModalOpen = true
    },
    closeImageModal() {
      this.imageModalOpen = false
    },
  },
  async asyncData({ $microcms }) {
    const images = await $microcms.get({
      endpoint: 'tatatoshi',
    })

    return images
  },
}
</script>

<style lang="scss" scoped>
.header-bottom-box {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include mq(sm) {
    gap: 48px;
  }

  @include mq() {
    gap: 48px;
  }

  @include mq(lg) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
}

.primary-button.how-to-apply {
  margin: 0;
  align-self: center;

  @include mq() {
    padding: 12px 64px;
  }

  @include mq(lg) {
    justify-self: end;
  }
}
</style>
