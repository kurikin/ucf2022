<template>
  <div @click="menuClicked" class="hamburger-lines" :class="{ open: isOpen }">
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
  </div>
</template>

<script>
export default {
  props: ['isOpen'],
  methods: {
    menuClicked() {
      this.isOpen = !this.isOpen
      this.$emit('toggle')
    },
  },
}
</script>

<style lang="scss" scoped>
.hamburger-lines {
  display: inline-block;
  height: 22px;
  width: 28px;
  display: flex;
  z-index: 100;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-lines .line {
  display: block;
  height: 2.2px;
  width: 100%;
  border-radius: 2px;
  background: $white;
}

.hamburger-lines {
  .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .line2 {
    transition: transform 0.1s ease-in-out;
  }

  .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  &.open {
    .line1 {
      transform: rotate(45deg);
    }

    .line2 {
      transform: scaleY(0);
    }
    .line3 {
      transform: rotate(-45deg);
    }
  }
}
</style>
