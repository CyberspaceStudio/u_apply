<template>
  <div class="container">
    <div v-for="(urlItem, index) in url" :key="urlItem"  class="pictures" @click="imgYu(urlItem)">
      <img :src="urlItem" class="shareImg">
      <img src="/static/images/icons/close.png" class="close" @click.stop="deleteImg(index)"/>
    </div>
    <div class="pictures" v-if="url.length < 9" @click="addPic">
      <img class="plus" src="/static/images/icons/plus.png">
    </div>
  </div>
</template>
<script>
export default {
  props: ["url"],
  methods: {
    addPic() {
      this.$emit("addPic");
    },
    imgYu(url) {
      var src = url; //获取data-src
      var imgList = url; //获取data-list
      //图片预览
      wx.previewImage({
        current: src, // 当前显示图片的http链接
        urls: imgList // 需要预览的图片http链接列表
      });
    },
    deleteImg(index) {
        this.$emit("deletePic",{
            index: index
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-left: 16rpx;
  @include flex_row;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 750rpx;
  width: 100%;
}
.pictures {
  @include config_width_height(214rpx, 228rpx);
  margin: 4rpx 3rpx;
  border-radius: 8rpx;
  overflow: hidden;
  @include flex_row;
  justify-content: center;
  align-items: center;
  position: relative;
  .shareImg{
    @include config_width_height(214rpx, 228rpx);
  }
  .close{
    @include config_width_height(40rpx, 40rpx);
    position: absolute;
    top: 0;
    right: 0;
  }
}
.plus {
  @include config_width_height(70rpx, 70rpx);
}
</style>
