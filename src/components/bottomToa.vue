<template>
<div>
    <div class="backsize change-color" @touchstart="onCancel"></div>
    <div class="bottom_toast animation-up">
        <div class="touch-share">
            <button open-type='share' class="share-btn">点击分享到微信</button>
        </div>
        <div class="bnt-cancle animation-up" @click="onCancel">取消</div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        onCancel() {
            this.$emit("handleCancel");
            wx.showTabBar({})
        }
    },
    onShareAppMessage(res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '一起交流志愿',
            path: '/pages/index/main'
        }
    }
};
</script>

<style lang="scss" scoped>
.bottom_toast {
  padding: 30rpx;
  padding-bottom: 90rpx;
  border-radius: 12rpx 0;
  z-index: 999;
  background: white;
  position: fixed;
  left: 0;
  width: 100vw;
  max-height: 774rpx;
  overflow: scroll;
  box-sizing: border-box;
  .share-btn{
      width: 100%;
      height: cr(50);
      font-size: cr(14);
      background-color: white;
      &:after{
          content:'';
          display: none;
      }
  }
  .close {
    position: absolute;
    top: 15rpx;
    right: 25rpx;
    width: 35rpx;
    height: 35rpx;
  }
  .bnt-cancle {
    position: fixed;
    width: 100vw;
    left: 0;
    height: cr(40);
    line-height: cr(40); 
    text-align:center;
    font-size: cr(14);
    max-height: 400rpx;
    overflow: scroll;
    box-sizing: border-box;

    /* .close {
        position: absolute;
        top: 15rpx;
        right: 25rpx;
        width: 35rpx;
        height: 35rpx;
    }

    .bnt-cancle {
        position: fixed;
        bottom: 0;
        left: 0rpx;
        right: 0rpx;
        height: 80rpx;
        line-height: 80rpx;
        font-size: 32rpx;
    } */
}
}

.test {
    text-align: center;
    color: white;
}

.animation-up {
    bottom: 0;
    animation: bottom-toast-up 0.1s linear;
}

.change-color {
    opacity: 0.7;
    animation: change-to-black 0.15s linear;
}

.animation-down {
    bottom: -400rpx;
    animation: bottom-toast-down 0.1s linear;
}

@keyframes bottom-toast-up {
    from {
        bottom: -400rpx;
    }

    to {
        bottom: 0;
    }
}

@keyframes bottom-toast-down {
    from {
        bottom: 0rpx;
    }

    to {
        bottom: -400rpx;
    }
}

@keyframes change-to-black {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.7;
    }
}

.backsize {
    background: black;
    filter: alpha(opacity=60);
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
</style>