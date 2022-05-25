<template>
  <div>
    <WhiteHeader>
      <template v-slot:page-title>新<span>着</span>情報</template>
    </WhiteHeader>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms, params }) {
    const id = params.id

    const data = await $microcms.get({
      endpoint: 'news',
      queries: { limit: 20 },
    })

    return data.contents[id]
  },
}
</script>

<style lang="scss" scoped></style>
