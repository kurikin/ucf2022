<template>
  <div>
    <!-- ヘッダー -->
    <header class="header">
      <img class="logo" src="logo.png" alt="" />
      <div class="text-box">
        <p class="date">
          <span>2022</span>年<span> 6</span>月<span> 26</span>日（日）
        </p>
        <p class="desc">
          横浜国立大学都市科学部<br />オープンキャンパス同時開催
        </p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  padding: 20px 24px;

  width: 100%;
  background: linear-gradient(
      hsla(200, 100%, 11%, 0.8),
      hsla(200, 100%, 11%, 0.8)
    ),
    url('/header-back.jpg');
  background-position: center;

  .logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 48px;
  }

  .text-box {
    display: grid;
    gap: 8px;
    font-size: 20px;
    color: $white;

    .date {
      span {
        font-size: 30px;
        font-weight: 700;
      }
    }
  }
}
</style>
