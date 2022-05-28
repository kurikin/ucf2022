<template>
  <div>
    <WhiteHeader>
      <template v-slot:page-title>優<span>し</span>さの街</template>
      <template v-slot:custom>
        <p class="subtitle">〜皆を支える都市基盤の魅力を伝える〜</p>
      </template>
    </WhiteHeader>
    <div class="content">
      <div class="container">
        <div class="youtube-wrapper">
          <youtube
            :fitParent="true"
            ref="youtube"
            class="youtube"
            :video-id="videoId"
            :resize="true"
          ></youtube>
        </div>
        <section class="about">
          <div class="heading-box">
            <h2 class="heading">「優しさの街」について</h2>
            <div class="sns fadeIn animation-2">
              <a
                class="sns-link"
                href="https://twitter.com/cus_ucf_oc"
                target="_blank"
              >
                <img class="sns-logo" src="/logos/twitter-brown.svg" alt="" />
              </a>
              <a
                class="sns-link"
                href="https://www.instagram.com/cus_ucf_oc/?hl=ja"
                target="_blank"
              >
                <img class="sns-logo" src="/logos/facebook-brown.svg" alt="" />
              </a>
              <a
                class="sns-link"
                href="https://note.com/ucf2022/"
                target="_blank"
              >
                <img class="sns-logo" src="/logos/note-brown.svg" alt="" />
              </a>
            </div>
          </div>
          <p class="description">
            「優しさの街」は、都市基盤学科の有志学生による団体です。SNSでの土木紹介やオープンキャンパスの実施を通して、普段土木に馴染みがない人にも土木の魅力を知ってもらいたい！そんな思いで活動しています。さらに、中高生に学生生活の様子を感じてもらいたい！との願いを実現すべく、現役の大学生の私たちだからこそできるフレッシュな発信を心がけています。
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'n0dMgDM9OY0',
    }
  },
}
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: 'Zen Antique';
  font-size: 20px;
  margin-top: -24px;
  text-align: left;

  @include mq() {
    margin-top: -32px;
  }
}

.youtube-wrapper {
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 24px;
}

.youtube {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.heading-box {
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-bottom: 16px;

  .heading {
    font-size: 24px;
    color: $black;
  }
}

.sns {
  display: flex;
  gap: 32px;
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
  align-self: start;

  .sns-link {
    width: 24px;
    height: 24px;
  }

  .sns-logo {
    width: 100%;
    height: 100%;
  }
}

.description {
  font-size: 16px;
  color: $black;
}
</style>
