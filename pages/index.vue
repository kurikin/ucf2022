<template>
  <div>
    <TopHeader
      :sideNavOpen="sideNavOpen"
      @sideNavToggle="sideNavOpen = !sideNavOpen"
    />
    <SideNav @sideNavClose="sideNavOpen = false" :show="sideNavOpen" />
  </div>
</template>

<script>
import TopHeader from '../components/header/TopHeader.vue'
import SideNav from '../components/navigation/SideNav.vue'
export default {
  name: 'IndexPage',
  components: { TopHeader, SideNav },
  data() {
    return {
      sideNavOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
