<template>
  <div class="expand">
    <WhiteHeader>
      <template v-slot:no-animation-page-title
        >ス<span>タ</span>ジオ診断</template
      >
    </WhiteHeader>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const name = params.name
    return { name }
  },
}
</script>

<style lang="scss" scoped></style>
