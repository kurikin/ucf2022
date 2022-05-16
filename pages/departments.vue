<template>
  <div class="black-background">
    <BlackHeader
      ><template v-slot:page-title>学<span>科</span>紹介</template>
      <template v-slot:description>
        <p>
          都市をさまざまな角度から捉えるユニークな学科が集まる都市科学部。<br />
          ４つの学科の様子を、学生の綴った言葉でご紹介します。
        </p>
      </template>
    </BlackHeader>
    <div class="content">
      <div class="center-line"></div>
      <div class="departments">
        <Department
          v-for="departmentData in departments"
          :data="departmentData"
          :key="departmentData.name"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Department from '../components/deparments/department.vue'
import { departments } from '~/assets/constants/department'

export default {
  components: { Footer, Department },
  computed: {
    departments() {
      return departments
    },
  },
}
</script>

<style lang="scss" scoped>
.center-line {
  width: 1px;
  height: 100px;
  background-color: $white;
  margin: 32px auto;

  @include mq() {
    height: 250px;
    margin: 48px auto;
  }
}

.departments {
  display: flex;
  flex-direction: column;
  gap: 80px;

  @include mq(sm) {
    gap: 64px;
  }

  @include mq() {
    gap: 80px;
  }

  @include mq(lg) {
    gap: 128px;
  }
}
</style>
