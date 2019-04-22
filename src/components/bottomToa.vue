<template>
<div>
    <div class="backsize change-color" @touchstart="onCancel"></div>
    <div class="bottom_toast animation-up">
        <slot>
            <div class="test">暂时没有数据哦</div>
        </slot>
        <button class="bnt-cancle animation-up" @click="onCancel">取消</button>
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
            title: '自定义转发标题',
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
  width: 100vw;
  max-height: 774rpx;
  overflow: scroll;
  box-sizing: border-box;
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
    max-height: 400rpx;
    overflow: scroll;
    box-sizing: border-box;

    .close {
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
    }
}

.test {
<<<<<<< HEAD
  text-align: center;
=======
    text-align: center;
    color: white;
>>>>>>> 820f85dbe5ed52ed8d5b4df01f8e18381a8324bc
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
<<<<<<< HEAD
  0% {
    bottom: -400rpx;
  }
  100% {
    bottom: 0;
  }
=======
    from {
        bottom: -400rpx;
    }

    to {
        bottom: 0;
    }
>>>>>>> 820f85dbe5ed52ed8d5b4df01f8e18381a8324bc
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
<<<<<<< HEAD
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
=======
    from {
        opacity: 0;
    }

    to {
        opacity: 0.7;
    }
>>>>>>> 820f85dbe5ed52ed8d5b4df01f8e18381a8324bc
}

.backsize {
    background: black;
    filter: alpha(opacity=60);
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
</style>
