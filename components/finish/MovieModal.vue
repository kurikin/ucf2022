<template></template>

<script>
import BaseModal from '~/components/BaseModal.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['movieModalOpen']),
  },
  methods: {
    ...mapMutations(['toggleMovieModal']),
  },
  components: { BaseModal },
}
</script>

<style lang="scss" scoped></style>
