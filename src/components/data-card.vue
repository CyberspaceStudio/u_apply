<template>
   <div class='main-wrap' @click='goPreview(data.id)'>
     <img :src='data.imgList[0]' class='cover-image'>
     <div class='content-after'>
      <span>{{data.describe}}</span>
      <span>#{{data.uploader_depart}}-{{data.uploader_name}}</span>
     </div>
   </div>
</template>

<script>
import {jumpTo} from '@/utils/index'
export default {
  props:['data'],
  data () {
    return {

    }
  },
  methods:{
    goPreview(id){
      jumpTo('/pages/preview/main',{id})
    }
  }
}

</script>
<style lang='scss' scoped>
  .main-wrap{
    width: 100%;
    height: cr(130);
    position: relative;
    .cover-image{
      width: 100%;
      height: 100%;
      border-radius: cr(10);
    }
    .content-after{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0,0,0,0.5);
      color: white;
      border-radius: 0 0 cr(15) cr(15);
      font-size: cr(10);
      @include flex_column;
      span{
        width: 100%;
        text-align: left;
        padding-left: cr(10);
        padding-right: cr(5);
        box-sizing: border-box;
        font-weight: 600;
      }
    } 
  }
</style>