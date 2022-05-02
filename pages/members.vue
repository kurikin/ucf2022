<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title>実<span>行</span>委員一覧</template>
    </WhiteHeader>
    <div class="container">
      <h2 class="department-name">総務部</h2>
      <div class="leaders-box">
        <div class="leader">
          <img src="/ikeda.png" alt="" class="portrait" />
          <div class="text-box">
            <p class="name">池田 瑞季</p>
            <div class="description">
              <p class="position">総務部長</p>
              <p class="belong">都市科学部 都市社会共生学科３年</p>
            </div>
          </div>
        </div>
      </div>
      <div class="members-box">
        <div class="member">
          <div class="text-box">
            <p class="name">田中 怜</p>
            <div class="description">
              <p class="position">優しさの街</p>
              <p class="belong">経済学部３年</p>
            </div>
          </div>
        </div>
        <div class="member">
          <div class="text-box">
            <p class="name">矢野 誠悟</p>
            <div class="description">
              <p class="position">本棚の片隅、覗かせてください</p>
              <p class="belong">都市科学部 都市社会共生学科３年</p>
            </div>
          </div>
        </div>
        <div class="member">
          <div class="text-box">
            <p class="name">田中 怜</p>
            <div class="description">
              <p class="position">優しさの街</p>
              <p class="belong">都市科学部 都市社会共生学科３年</p>
            </div>
          </div>
        </div>
        <div class="member">
          <div class="text-box">
            <p class="name">田中 怜</p>
            <div class="description">
              <p class="position">優しさの街</p>
              <p class="belong">経済学部３年</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import WhiteHeader from '../components/WhiteHeader.vue'
import Footer from '~/components/Footer.vue'
export default { components: { WhiteHeader, Footer } }
</script>

<style lang="scss" scoped>
.department-name {
  color: $black;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 4px;
  margin-bottom: 24px;

  @include mq(sm) {
    font-size: 44px;
    margin-bottom: 32px;
  }
}

.leader {
  display: flex;
  gap: 20px;

  @include mq(sm) {
    gap: 48px;
  }
}

.portrait {
  width: 40%;
  height: 40%;
  max-width: 130px;
}

.text-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.leaders-box {
  margin-bottom: 48px;
}

.members-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
  column-gap: 16px;
}

.name {
  font-size: 24px;
  font-weight: 600;

  @include mq(sm) {
    font-size: 30px;
  }
}

.description {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  @include mq(sm) {
    font-size: 20px;
  }
}
</style>
