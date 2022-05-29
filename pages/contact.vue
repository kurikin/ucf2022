<template>
  <div class="white-background">
    <WhiteHeader>
      <template v-slot:page-title>お<span>問</span>合せ</template>
      <template v-slot:description
        >都市文化祭へのお問合せは、下記のGoogleフォームからお送りください。<br />
        送信後、自動返信メールが届きますのでご確認ください。
      </template>
    </WhiteHeader>
    <div class="no-margin-content"></div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
