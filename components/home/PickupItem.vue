<template>
  <nuxt-link to="#">
    <div class="pickup-item">
      <div class="img-container">
        <img class="thumbnail" :src="imageUri" alt="" />
      </div>
      <div class="text-box">
        <p class="description">{{ description }}</p>
        <h3 class="title">{{ title }}</h3>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUri: {
      type: String,
      default: 'comingsoon.jpeg',
    },
  },
}
</script>

<style lang="scss" scoped>
.pickup-item {
  padding: 6px;
  background-color: $white;
  border-radius: $radius-xs;
  overflow: hidden;
}

.img-container {
  overflow: hidden;
  border-radius: $radius-xs;
  aspect-ratio: 4 / 3;
  margin-bottom: 8px;
  transform: translateZ(0);
}

.thumbnail {
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: $radius-xs;
  aspect-ratio: 4 / 3;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }
}

.text-box {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.description {
  font-size: 14px;
  color: $secondary;
}
.title {
  font-size: 20px;
  color: $black;
}

// @include mq(sm) {
//   .pickup-item {
//     transition: all 0.4s;

//     &:hover {
//       transform: translateY(-10px);
//     }
//   }
// }

@include mq() {
  .pickup-item {
    border-radius: $radius-sm;
  }

  .text-box {
    margin-bottom: 2px;
  }

  .thumbnail {
    border-top-left-radius: $radius-sm;
    border-top-right-radius: $radius-sm;
  }
}

@include mq(lg) {
  .description {
    font-size: 16px;
  }
  .title {
    font-size: 24px;
  }
}
</style>
