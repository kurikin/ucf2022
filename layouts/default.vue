<template>
  <Nuxt />
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://ucf2022.com${this.$route.path}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
