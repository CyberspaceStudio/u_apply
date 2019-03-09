<template>
  <div class="container" ref="contain">
    <div class="fixed-part">
      <Title :showCircle="true" @submitCancel="changeToast"></Title>
    </div>
    <index-content></index-content>
    <bottom-toast :show="showToast" @handleCancel="onCancel" v-if="showToast">
      <div class="toast-container">
        <div class="icon1">
          <img src="/static/images/icons/wechat.png">
          <span>点击分享到微信</span>
        </div>
        <div class="icon1">
          <img src="/static/images/icons/wechat.png">
          <span>生成分享二维码</span>
        </div>
      </div>
    </bottom-toast>
    <!-- <bottom-toast :show="showToast"></bottom-toast> -->
    <add-btn></add-btn>
  </div>
</template>

<script>
import Title from "../../components/Title";
import addBtn from "../../components/add-btn";
import indexContent from "../../components/index-content";
import bottomToast from "../../components/bottomToa";
// import bottomToast from '../../components/bottom-toast'

export default {
  mounted() {
    this.$nextTick(function() {
      // this.$refs.text.value='这里是';
    });
  },
  data() {
    return {
      showToast: false,
      toastIndex: 0
    };
  },
  components: {
    Title,
    addBtn,
    indexContent,
    bottomToast
  },
  methods: {
    onCancel() {
      this.showToast = false;
    },
    changeToast() {
      this.showToast = true;
    },
    onShareAppMessage(res) {
      return {
        title: "志愿圈",
        path: "/pages/index/main"
      };
    },
    onReachBottom() {
      console.log("数据获取中...");
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  width: $full_width;
  height: $full_width;
  @include flex_column;
  .fixed-part {
    width: $full_width;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: white;
    .nav {
      width: $full_width;
      margin-top: cr(14);
      @include flex_row;
      font-size: cr(12);
      div {
        width: cr(28);
        height: cr(20);
        margin-left: cr(15);
        text-align: center;
        line-height: cr(20);
        color: #b3b3b3;
        &:nth-of-type(1) {
          border-bottom: cr(2) solid #000;
          color: #000;
        }
      }
    }
  }
  .toast-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      height: 60rpx;
    }
  }
  .toast-container {
    display: flex;
    padding: 0 60rpx;
    justify-content: space-around;
    height: 236rpx;
    align-items: center;
    .icon1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 24rpx;
      max-width: 100rpx;
      text-align: center;
      img {
        height: 90rpx;
        width: 90rpx;
      }
    }
  }
}
</style>
