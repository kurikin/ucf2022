<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>た<span>た</span>ずみたい都市</template>
      <template v-slot:custom>
        <div class="header-bottom-box">
          <p class="description">
            みなさんが「たたずみたい」と思う都市の写真を集める企画です。<br />
            自分の周りの都市・地域を見つめなおしてみませんか？<br />
            自分の知らない都市・地域を知ってみませんか？
          </p>
          <button class="primary-button how-to-apply" @click="toggleApplyModal">
            参加方法はこちら！
          </button>
        </div>
      </template>
    </WhiteHeader>
    <div class="content">
      <ImageGallery :contents="contents" />

      <!-- モーダル -->
      <transition name="component-fade">
        <ImageModal v-if="imageModalOpen" />
      </transition>
      <transition name="component-fade">
        <ApplyModal v-if="applyModalOpen" />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import ImageGallery from '../../components/event/ImageGallery.vue'
import ImageModal from '~/components/event/ImageModal.vue'
import ApplyModal from '~/components/event/ApplyModal.vue'
import { mapState, mapMutations } from 'vuex'
import { startObserve } from '~/scripts/observe'

export default {
  components: { Footer, ImageGallery, ImageModal, ApplyModal },
  methods: {
    ...mapMutations(['toggleApplyModal']),
  },
  computed: {
    ...mapState(['imageModalOpen', 'applyModalOpen']),
  },
  mounted() {
    startObserve('.fade-in-observe, .fade-up-observe')
  },
  async asyncData({ $microcms }) {
    const images = await $microcms.get({
      endpoint: 'tatatoshi',
      queries: {
        limit: 30,
      },
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
  padding: 12px 24px;
  align-self: center;

  &:hover {
    cursor: pointer;
  }

  @include mq() {
    padding: 12px 64px;
  }

  @include mq(lg) {
    justify-self: end;
  }
}

.description {
  font-size: 18px;

  @include mq(sm) {
    font-size: 20px;
  }
}
</style>
