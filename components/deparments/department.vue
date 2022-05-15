<template>
  <div class="department container">
    <h2 class="section-heading">{{ data.name }}</h2>
    <div class="grid" :class="{ 'left-side-image': !data.rightSideImage }">
      <div class="image-box">
        <img class="department-img" :src="data.imagePath" alt="" />
      </div>

      <!-- <p class="description">{{ data.description }}</p> -->
      <div class="descriptions">
        <p
          v-for="(description, index) in data.descriptions"
          :key="index"
          class="description"
        >
          {{ description }}
        </p>
      </div>

      <div
        class="button-box"
        :class="{ '--has-two-buttons': data.showSecondaryButton }"
      >
        <button
          class="base-button button--secondary"
          v-if="data.showSecondaryButton"
        >
          {{ data.secondaryButtonText }}
        </button>
        <button class="base-button button--primary">
          {{ data.primaryButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  row-gap: 24px;

  @include mq(sm) {
    row-gap: 32px;
  }

  @include mq() {
    grid-template-columns: 60fr 40fr;
    grid-template-rows: auto auto;
    column-gap: 32px;
    row-gap: 64px;
  }

  @include mq(lg) {
    grid-template-columns: 65fr 35fr;
    column-gap: 48px;
    row-gap: 96px;
  }

  &.left-side-image {
    @include mq() {
      grid-template-columns: 40fr 60fr;

      .image-box {
        grid-column: 1;
      }

      .description,
      .button-box {
        grid-column: 2;
      }

      .button-box {
        align-items: flex-end;
      }
    }

    @include mq(lg) {
      grid-template-columns: 35fr 65fr;
    }
  }
}

.image-box {
  overflow: hidden;
  border-radius: $radius-sm;
  max-height: 300px;

  @include mq() {
    grid-column: 2;
    grid-row: 1 / 3;
    margin-bottom: 0;

    max-height: none;
    height: 100%;
  }
}

.department-img {
  width: 100%;
  height: 100%;
  object-position: 50% 40%;
  object-fit: cover;
}

.descriptions {
  color: $white;
  font-size: 16px;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @include mq(sm) {
    font-size: 18px;
    gap: 18px;
  }

  @include mq() {
    font-size: 20px;
    line-height: 1.7;
    gap: 20px;
  }
}

.base-button {
  display: inline-block;
  margin: 0 auto;
  color: $white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 24px;
  padding: 8px 24px;
  border: none;
  letter-spacing: 2px;

  @include mq(sm) {
    padding: 10px 24px;
  }

  @include mq() {
    margin: 0;
    font-size: 20px;
    padding: 10px 48px;
    border-radius: 32px;
  }
}

.button-box {
  display: flex;
  flex-direction: column;

  @include mq() {
    grid-column: 1;
    grid-row: 2;
    align-items: flex-start;
  }

  &.--has-two-buttons {
    gap: 20px;
  }
}

.button--primary {
  background-color: $primary;
}

.button--secondary {
  background-color: $secondary;
}
</style>
