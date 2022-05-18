<template>
  <BaseModal :modalOpen="modalOpen"></BaseModal>
</template>

<script>
export default {
  props: ['eventName', 'speakers', 'modalOpen'],
}
</script>

<style lang="scss" scoped></style>
