<template>
  <nuxt-link :to="path">
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
    path: {
      type: String,
      default: '#',
    },
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
      default: 'comingsoon.svg',
    },
  },
}
</script>

<style lang="scss" scoped>
.pickup-item {
  padding: 6px;
  background-color: $white;
  border-radius: $radius-md;
  overflow: hidden;
}

.img-container {
  overflow: hidden;
  border-radius: $radius-md;
  aspect-ratio: 4 / 3;
  margin-bottom: 8px;
  transform: translateZ(0);
}

.thumbnail {
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: $radius-md;
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
  font-family: Zen Kaku Gothic New;
  color: $black;
  font-weight: 600;
}

@include mq() {
  .pickup-item {
    border-radius: $radius-md;
  }

  .text-box {
    margin-bottom: 2px;
  }

  .img-container {
    border-radius: $radius-md;
  }

  .thumbnail {
    border-top-left-radius: $radius-md;
    border-top-right-radius: $radius-md;
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
