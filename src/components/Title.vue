<template>
  <div class="title">
    <img :src="showCircle?bg_img[0]:bg_img[1]" :class="showCircle?'index-bg-img':'depart-bg-img'">
    <div class="content" v-if="showCircle">
      <span>志愿圈</span>
      <img :src="shareIcon" @click="clickShare" class="img-share">
    </div>
    <div class="content" v-else>
      <div class="content_depart">
        <span class="depart-title">志愿时光</span>
        <span class="depart-name halfBackground">{{depart}}</span>
      </div>
      <img class="title-class" v-if="imgUrl" :src="imgUrl+'classification4.png'">
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    showCircle: {
      type: Boolean
    },
    depart: {
      type: String,
      default: "工作室"
    }
  },
  data() {
    return {
      imgUrl: this.GLOBAL.localImg,
      shareIcon: "../../static/images/icons/share.png",
      classificationIcon: "../../static/images/icons/classification4.png",
      bg_img: ["/static/images/1.png", "/static/images/4.png"]
    };
  },
  methods: {
    clickShare() {
      this.$emit("submitCancel");
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  width: $full_width;
  height: cr(60);
  position: relative;
  overflow: hidden;
  &-class{
    position: absolute;
    right: 0;
    width: 60rpx;
    height: 60rpx;
    top: 20rpx;
  }
  .index-bg-img {
    width: cr(100);
    height: cr(80);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .depart-bg-img {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .content {
    width: $full_width;
    height: 100%;
    padding-left: cr(28);
    padding-right: cr(22);
    box-sizing: border-box;
    @include flex_row;
    @include flex_between;
    align-items: center;
    font: {
      weight: 500;
    }
    div {
      @include flex_column;
      align-items: flex-start;
      .depart-title {
        color: #f0bc76;
        font: {
          weight: 500;
        }
      }
      .depart-name {
        color: #d59fa5;
        position: relative;
        font: {
          size: cr(12);
        }
        color: #F0B376;
      }
    }
    span {
      color: #d67183;
      font: {
        size: cr(20);
      }
    }
  }
  span {
    font: {
      size: cr(20);
    }
  }
  .img-share {
    width: cr(22);
    height: cr(22);
  }
}
</style>
