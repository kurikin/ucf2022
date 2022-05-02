<template>
  <div class="white">
    <WhiteHeader>
      <template v-slot:page-title>実<span>行</span>委員一覧</template>
    </WhiteHeader>
    <div class="container">
      <div class="department-container">
        <div
          v-for="department in members"
          :key="department.departmentName"
          class="department"
        >
          <h2 class="department-name">{{ department.departmentName }}</h2>
          <div class="leaders-box">
            <div
              v-for="leader in department.leaders"
              :key="leader.name"
              class="leader"
            >
              <img src="/ikeda.png" alt="" class="portrait" />
              <div class="text-box">
                <p class="name">{{ leader.name }}</p>
                <div class="description">
                  <p class="position">{{ leader.position }}</p>
                  <p class="belong">{{ leader.belong }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="members-box">
            <div
              v-for="member in members[0].members"
              :key="member.name"
              class="member"
            >
              <div class="text-box">
                <p class="name">{{ member.name }}</p>
                <div class="description">
                  <p class="position show-over-sm">{{ member.position }}</p>
                  <p class="belong">{{ member.belong }}</p>
                </div>
              </div>
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
import { members } from '~/assets/constants'

export default {
  components: { WhiteHeader, Footer },
  computed: {
    members() {
      return members
    },
  },
}
</script>

<style lang="scss" scoped>
.department-name {
  color: $black;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 4px;
  margin-bottom: 32px;

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
  row-gap: 24px;
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
