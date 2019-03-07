<template>
  <div class="container">
    <div class="fixed-part">
      <Title :showCircle="true" @submitCancel="changeToast"></Title>
      <nav class="nav">
        <div>最新</div>
        <div @click="goDepart">部门</div>
      </nav>
    </div>
    <index-content></index-content>
    <bottom-toast :show="showToast" @handleCancel="onCancel" v-if="showToast">
      <ul class="toast-content">
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>11111</li>
        <li>999999</li>
      </ul>
    </bottom-toast>
    <!-- <bottom-toast :show="showToast"></bottom-toast> -->
    <add-btn></add-btn>
  </div>
</template>

<script>
  import Title from '../../components/Title'
  import addBtn from '../../components/add-btn'
  import indexContent from '../../components/index-content'
  import bottomToast from '../../components/bottomToa'
  // import bottomToast from '../../components/bottom-toast'

  export default {
    data(){
      return {
        showToast: false,

      }
    },
    components: {
      Title,addBtn,indexContent,bottomToast
    },
    methods:{
      goDepart(){
        wx.switchTab({
          url:'../depart/main'
        })
      },
      onCancel() {
        this.showToast = false
      },
      changeToast() {
        this.showToast = true
      }
    },
    onReachBottom(){
      console.log('数据获取中...')
    }
  }
</script>

<style scoped lang="scss">
  @import '../../style/common';

  .container{
    width: $full_width;
    height: $full_width;
    @include flex_column;
    .fixed-part{
      width: $full_width;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: white;
      .nav{
        width: $full_width;
        margin-top: cr(14);
        @include flex_row;
        font:{
          size:cr(12);
        }
        div{
          width: cr(28);
          height: cr(20);
          margin-left: cr(15);
          text-align: center;;
          line-height: cr(20);
          color: #B3B3B3;
          &:nth-of-type(1){
            border:{
              bottom:cr(2) solid #000;
            }
            color: #000;
          }
        }
      }
    }
    .toast-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      li{
        height: 60rpx;
      }
    }
  }
</style>
