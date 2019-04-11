<template>
  <div class="main-wrap">
    <div class="like-nav">
      <div class="like-state" v-if='!isliked'>
        <img src='/static/images/icons/bigger-medal.png' @click='setLike'>
        <span>点击图标可授予TA志愿奖章</span>
      </div>
      <div class="like-state" v-if='isliked'>
        <img src='/static/images/icons/liked.png'>
        <span>已授予TA志愿奖章</span>
      </div>
      <span>{{getTrulyDate}}</span>
    </div>
    <swiper next-margin='25px' class="swiper-wrap" @change='change'>
      <swiper-item v-for='(item,index) in atlas.imgList' :key='index' class='swiper-item' @touchstart="touchStart" @touchmove='touchMove' @touchend='touchEnd'>
        <img :src="item" class="swiper-image">
        <div class='atlas-count'>{{index+1}}/{{atlas.imgList.length}}</div>
        <div class='atlas-intro'>{{atlas.describe}}</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {stampToDate} from '@/utils/timeCount'
import {showToast} from '@/utils/index'
export default {
  props:['atlas'],
  data(){
    return {
      isliked:false,
      touchStartPosition:0,       //滑动开始定位
      touchMoveLenght:0,          //滑动中手势位置追踪
      getTarget:false             //是否到达最后一张
    }
  },
  computed:{
    getTrulyDate(){
      return stampToDate(this.atlas.upload_time)
    }
  },
  methods:{
    touchStart(e){
      this.touchStartPosition=e.clientX;
    },
    touchMove(e){
      let _diff=e.clientX-this.touchStartPosition;
      this.touchMoveLenght=_diff;
    },
    touchEnd(){
      if(this.getTarget && this.touchMoveLenght<-40){
        console.log('数据请求')
      }
    },
    setLike(){
      this.isliked=true;
      //点赞数据映射
    },
    change(e){
      if(e.target.current===this.atlas.imgList.length-1){
        showToast('继续滑动切换下一图集');
        this.getTarget=true;
      }else{
        this.getTarget=false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .main-wrap{
    width: 100%;
    @include flex_column;
    align-items: center;
    margin-top: cr(20);
    .like-nav{
      width: 100%;
      height: cr(60);
      font-size: cr(12);
      color: #8C8888;
      font-weight : 400;
      @include flex_row;
      justify-content: space-between;
      padding-right: cr(25);
      box-sizing: border-box;
      .like-state{
        @include flex_row;
        align-items: center;
        padding-left: cr(20);
        box-sizing: border-box;
        img{
          width: cr(20);
          height: cr(20);
          margin-right: cr(6);
        }
      }
      span{
        line-height: cr(60);
      }
    }
    .swiper-wrap{
      width: 100%;
      height: cr(250);
      margin-top: cr(50);
      .swiper-item{
        color: white;
        font-size: cr(12);
        padding-left: cr(10);
        padding-right:cr(10);
        box-sizing: border-box; 
        img{
          width: 100%;
          height: 100%;
          border-radius: cr(15);  
        }
        .atlas-count{
          width: cr(25);
          text-align: center; 
          position: absolute;
          top: 0;
          right: cr(20);
          background-color: rgba(0,0,0,.5);
        }
        .atlas-intro{
          width: 80%;
          position: absolute;
          bottom: 0;
          left: cr(10);
          border-radius: 0 0 cr(15) cr(15);
          background-color: rgba(0,0,0,.5);
          padding-left: cr(15);
          padding-right: cr(15);
        } 
      }
    }
  }
</style>
