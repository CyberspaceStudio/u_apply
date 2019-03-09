<template>
  <div class="container" ref="contain">
    <div class="fixed-part">
      <Title :showCircle=true @open="()=>showToast=true"></Title>
    </div>
    <index-content></index-content>
    <bottom-toast :show="showToast" :index="toastIndex" @close="()=>showToast=false"></bottom-toast>
    <add-btn></add-btn>
  </div>
</template>

<script>
  import Title from '../../components/Title'
  import addBtn from '../../components/add-btn'
  import indexContent from '../../components/index-content'
  import bottomToast from '../../components/bottom-toast'

  export default {
    mounted(){
      this.$nextTick(function(){
        // this.$refs.text.value='这里是';
      })
    },
    data(){
      return {
        showToast:false,
        toastIndex:0
      }
    },
    components: {
      Title,addBtn,indexContent,bottomToast
    },
    methods:{

    },
    onShareAppMessage(res){
      return {
        title:'志愿圈',
        path:'/pages/index/main'
      }
    },
    onReachBottom(){
      console.log('数据获取中...')
    }
  }
</script>

<style scoped lang="scss">
  @import '../../style/common.scss';
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
        font-size:cr(12);
        div{
          width: cr(28);
          height: cr(20);
          margin-left: cr(15);
          text-align: center;;
          line-height: cr(20);
          color: #B3B3B3;
          &:nth-of-type(1){
            border-bottom:cr(2) solid #000;
            color: #000;
          }
        }
      }
    }
  }
</style>
