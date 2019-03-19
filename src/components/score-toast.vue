<template>
  <div>
    <div class="backsize change-color"></div>
    <div class="scoreToast">
        <title>面试分数</title>
        <div class="scoreToast-choose">
            <span v-for="item in score" :key="item" @click="chooseScore(item)" :class="currentScore == item ? 'choosen' : ''">{{item}}</span>
        </div>
        <div class="scoreToast-text">
          <div class="inner" style="position:absolute">印象关键字（20字以内）</div>
          <textarea>
          </textarea>
        </div>
        <button class="scoreToast-bnt">提交</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        score: ['A','B','C','D','E'],
        currentScore:''
      }
    },
    methods:{
      chooseScore(e) {
        this.currentScore = e
      }
    }
};
</script>
<style lang="scss" scoped>
.backsize {
  position: absolute;
  background: black;
  filter: alpha(opacity=60);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 888;
}
.change-color {
  opacity: 0.7;
  animation: change-to-black 0.15s linear;
}
.choosen{
  background: #7EAD9D;
  animation: change-to-choose 0.15s linear;
}
@keyframes change-to-choose{
  0%{
    background: white;
  }
  100%{
    background: #7EAD9D;
  }
}

@keyframes change-to-black {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}
.scoreToast {
    padding: 22rpx 40rpx;
  position: fixed;
  @include config_width_height(664rpx, 552rpx);
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  &-choose{
      margin-top: 20rpx;
      @include flex_row;
      justify-content: center;
      span{
            display: inline-block;
            height: 92rpx;
            width: 20%;
            left: 108px;
            border: 1px solid rgba(189, 213, 205, 1);
            line-height: 92rpx;
            text-align: center;
      }
      span:first-child{
        border-radius: 20rpx 0 0 0;
      }
      span:last-child{
        border-radius: 0 20rpx 0 0;
      }
  }
  &-text{
    position: relative;
    @include config_width_height(auto,175rpx);
    border: 1px solid rgba(189, 213, 205, 1);
    border-radius: 0 0 20rpx 20rpx;
    margin-top: 12rpx;
    padding: 58rpx 0 0 16rpx;
  }
  &-bnt{
    @include config_width_height(382rpx,92rpx);
    background: #7EAD9D;
    color: white;
    font-size: 32rpx;
    line-height: 92rpx;
    border-radius: 46rpx;
    margin-top: 38rpx;
  }
  .inner{
    position: absolute;
    left: 16rpx;
    top: 16rpx;
    font-size: 32rpx;
    color: #BDD5CD;
  }
}
</style>
