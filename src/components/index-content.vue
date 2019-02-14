<template>
    <div class="container">
      <div v-for="(list,index) in contentLists" :key="index" class="content-list" @click="goPreview">
        <img :src="list.imgList[0]" mode="widthFix">
        <div class="content-text">
          <span>#{{list.uploader_depart}}-{{list.uploader_name}}</span>
          <p>{{list.describe}}</p>
          <div class="content-footer">
            <span>10天前</span>
            <span>{{list.reader_num}}人查阅</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index-content",
      methods:{
          goPreview(){
            wx.navigateTo({
              url:'../preview/main'
            })
          }
      },
      data(){
          return {
            coverImgLists:[],
            contentLists:[
              {
                imgList:[
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂，一个专注职业技能提升的在线学习平台网易云课堂，一个专注职业技能提升的在线学习平台',
                upload_time:'',
                reader_num:12
              },
              {
                imgList:[
                  '../../static/images/background.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂，一个专注职业技能提升的在线学习平台',
                upload_time:'',
                reader_num:12
              },
              {
                imgList:[
                  '../../static/images/background.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂，一个专注职业技能提升的在线学习平台',
                upload_time:'',
                reader_num:12
              },
              {
                imgList:[
                  '../../static/images/1549702924359.jpg',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂',
                upload_time:'',
                reader_num:12
              },
              {
                imgList:[
                  '../../static/images/1549702916236.jpg',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂',
                upload_time:'',
                reader_num:12
              },
              {
                imgList:[
                  '../../static/images/1549702914119.jpg',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂',
                upload_time:'',
                reader_num:12
              },
              {
                imgList:[
                  '../../static/images/1549702898288.jpg',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂',
                upload_time:'',
                reader_num:12
              }
            ]
          }
      },
      created(){
        for(let item of this.contentLists){
          this.coverImgLists.push(item.imgList[0])
        }
      }
    }
</script>

<style scoped lang="scss">
  @import '../style/common';

  .container{
    width: $full_width;
    column-count: 2;
    column-gap: 0;
    margin-top: cr(70);
    .content-list{
      width: 98%;
      box-sizing: border-box;
      break-inside: avoid;
      font:{
        size: cr(12);
      }
      img{
        width: $full_width;
        border-radius: cr(5) cr(5) 0 0;
      }
      .content-text{
        width: $full_width;
        padding-left: cr(8);
        box-sizing: border-box;
      }
      span{
        color: #B3B3B3;
      }
      p{
        width: 100%;
        height: cr(45);
        text-align:justify;
        text-justify:inter-ideograph;
        line-height: cr(22.5);
        overflow: hidden;
      }
      .content-footer{
        width: $full_width;
        @include flex_row;
        @include flex_between;
      }
    }
  }
</style>
