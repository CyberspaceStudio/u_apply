<template>
  <div class="sendPicture">
    <div class="sendPicture-box">
      <textarea class="sendPicture-box-text" placeholder="分享志愿心（20字以内）..." maxlength="20"></textarea>
      <div v-if="isUpload" class="sendPicture-box-picArea">
        <img
          class="sendPicture-box-picArea-icon"
          src="/static/images/icons/upload.png"
          @click="upLoadPicture"
        >
        <article class="sendPicture-box-picArea-toast">上传图片（上限9张）</article>
      </div>
      <loaded-pic v-else :url="imgUrl" @addPic="upLoadPicture" @deletePic="deletePicture"></loaded-pic>
    </div>
    <button class="sendPicture-config">上传</button>
  </div>
</template>
<script>
import loadedPic from "@/components/loaded-pic";
import promisify from "@/utils/promisify";
import { chooseImage } from "@/utils/wxFunc";
export default {
  data() {
    return {
      imgUrl: []
    };
  },
  computed: {
    isUpload() {
      return this.imgUrl.length === 0;
    }
  },
  methods: {
    async upLoadPicture() {
      const res = await chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"]
      });
      this.imgUrl.push(res.tempFilePaths);
    },
    deletePicture(data) {
      this.imgUrl.splice(data.index, 1);
    }
  },
  components: {
    loadedPic
  }
};
</script>
<style lang="scss" scoped>
.sendPicture {
  padding: 26rpx 23rpx;
  &-box {
    height: 800rpx;
    border-radius: 8rpx 8rpx 8rpx 8rpx;
    color: rgba(16, 16, 16, 1);
    font-size: 28rpx;
    border: 4rpx dashed rgba(174, 193, 181, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30rpx 18rpx;
    &-text {
      height: 112rpx;
      width: 90%;
      font-size: 36rpx;
    }
    &-picArea {
      height: 100%;
      width: 100%;
      @include flex_column;
      justify-content: center;
      align-items: center;
      &-icon {
        height: 110rpx;
        width: 110rpx;
      }
      &-toast {
        width: 136rpx;
        color: rgba(110, 145, 107, 1);
        font-size: 24rpx;
        text-align: center;
        font-family: PingFangSC-regular;
        padding-top: 26rpx;
      }
    }
  }
  &-config {
    width: 248rpx;
    background: #7ead9d;
    margin-top: 120rpx;
    color: white;
  }
}
</style>
