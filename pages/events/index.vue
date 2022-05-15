<template>
  <div class="black-background">
    <div class="expand">
      <BlackHeader
        ><template v-slot:page-title
          >企<span>画</span>一覧</template
        ></BlackHeader
      >
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
export default { components: { Footer } }
</script>

<style lang="scss" scoped></style>
