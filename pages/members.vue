<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>実<span>行</span>委員一覧</template>
    </WhiteHeader>
    <div class="container content">
      <div class="members-container">
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
              <img
                :src="'/portraits/' + leader.fileName"
                alt=""
                class="portrait"
              />
              <div class="text-box">
                <p class="name">{{ leader.name }}</p>
                <div class="description">
                  <p class="position">{{ leader.position }}</p>
                  <p class="belong">{{ leader.belong }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="department.members.length !== 0" class="members-box">
            <div
              v-for="member in department.members"
              :key="member.name"
              class="member"
            >
              <div class="text-box">
                <p class="name">{{ member.name }}</p>
                <div class="description">
                  <p
                    v-if="member.position !== ''"
                    class="position show-over-sm"
                  >
                    {{ member.position }}
                  </p>
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
import { members } from '~/assets/constants/member'

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
.members-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-bottom: 48px;

  @include mq(sm) {
    margin-bottom: 64px;
  }

  @include mq() {
    gap: 80px;
  }

  @include mq(lg) {
    gap: 96px;
    margin-bottom: 80px;
  }
}

.department-name {
  color: $black;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 4px;
  margin-bottom: 32px;

  @include mq(sm) {
    margin-bottom: 32px;
  }

  @include mq() {
    font-size: 44px;
    margin-bottom: 48px;
  }

  @include mq(lg) {
    font-size: 52px;
    letter-spacing: 8px;
  }
}

.leaders-box {
  display: flex;
  flex-direction: column;
  gap: 48px;

  @include mq(lg) {
    flex-direction: row;
  }
}

.leader {
  display: flex;
  gap: 20px;

  @include mq(sm) {
    gap: 48px;
  }

  @include mq() {
    gap: 48px;
  }
}

.portrait {
  width: 120px;
  height: 120px;

  @include mq(sm) {
    width: 130px;
    height: 130px;
  }

  @include mq() {
    width: 150px;
    height: 150px;
  }
}

.text-box {
  display: flex;
  flex-direction: column;
  gap: 8px;

  @include mq() {
    gap: 16px;
  }
}

.members-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 32px;
  column-gap: 16px;
  margin-top: 48px;

  @include mq() {
    row-gap: 48px;
    margin-top: 64px;
  }

  @include mq(lg) {
    grid-template-columns: 55fr 45fr;
  }
}

.name {
  font-size: 24px;
  font-weight: 600;

  @include mq() {
    font-size: 30px;
  }
}

.description {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  @include mq() {
    font-size: 20px;
  }
}
</style>
