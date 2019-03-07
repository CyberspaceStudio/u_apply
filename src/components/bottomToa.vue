<template>
  <div>
    <div class="backsize" @touchstart="onCancel"></div>
    <div class="bottom_toast animation-up">
      <slot>
        <div class="test">暂时没有待渲染的组件哦</div>
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
    }
  }
};
</script>
<style scoped  lang="scss">
.bottom_toast {
  padding: 30rpx;
  padding-bottom: 90rpx;
  border-radius: 12rpx 0;
  z-index: 999;
  background: white;
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
.backsize{
  background: black;
  filter: alpha(opacity=60);
  opacity: 0.7;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 888; 
}
</style>
