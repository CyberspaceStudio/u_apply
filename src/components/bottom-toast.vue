<template>
    <div class="container" v-if="show">
      <div class="content">
        <div class="content-list">
          <button open-type="share" v-for="(action,index) in actions[toastIndex]" :key="index" class="action-list">{{action.text}}</button>
        </div>
        <div class="cancel-button" @click="closeToast">取消</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "bottom-toast",
      props:{
        show:{
          type:String,
          default:false
        },
        toastIndex:{
          type:Number,
          default:0
        }
      },
      data(){
        return {
          actions:[
            [
              {text:'分享到微信'},
              {text:'生成分享二维码'},
            ],
            [
              {text:'分享招新报名表到微信'},
              {text:'生成报名表入口二维码'},
              {text:'查看招新报名表'}
            ]
          ]
        }
      },
      methods:{
          closeToast(){
            this.$emit('close');
          }
      }
    }
</script>

<style scoped lang="scss">
  @import '../style/common.scss';
  .container {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: 110;
    background-color: transparent;
    @include flex_column;
    text-align: center;
    font: {
      size: cr(14);
    }
    .content{
      width: $full_width;
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: white;
      .content-list{
        padding-top: cr(5);
        .action-list{
          width: $full_width;
          height: cr(22);
          border:cr(0) solid #000;
          background-color: white;
          line-height: cr(22);
          font: {
            size: cr(14);
          }
          &::after{
            border:none;
          }
        }
      }
      .cancel-button{
        width: $full_width;
        height: cr(25);
        line-height: cr(25);
        border: {
          top: cr(4) solid #E3E0E0;
        }
      }
    }
  }
</style>
