<template>
  <div class="black">
    <BlackHeader
      ><template v-slot:page-title>学<span>科</span>紹介</template>
      <template v-slot:description>
        <p>
          都市をさまざまな角度から捉えるユニークな学科が集まる都市科学部。<br />
          ４つの学科の様子を、学生の綴った言葉でご紹介します。
        </p>
      </template>
    </BlackHeader>
    <div class="center-line"></div>
    <Department />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Department from '../components/deparments/department.vue'
export default { components: { Footer, Department } }
</script>

<style lang="scss" scoped>
.center-line {
  width: 1px;
  height: 100px;
  background-color: $white;
  margin: 32px auto;
}
</style>
