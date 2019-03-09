<template>
    <div class="container">
      <div class="content-left">
        <div v-for="(list,index) in cover.left" :key="index" class="content-list" @click="goPreview">
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
      <div class="content-right">
        <div v-for="(list,index) in cover.right" :key="index" class="content-list" @click="goPreview">
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
    </div>
</template>

<script>
  export default {
      name: "index-content",
      data(){
          return {
            cover:{
              left:[],
              right:[]
            },
            contentLists:[
              {
                imgList:[
                  'http://n.sinaimg.cn/news/transform/700/w1000h500/20190308/q153-htwhfzt3952859.jpg',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                  '../../static/images/sign-in.png',
                ],
                uploader_name:'苏国涛',
                uploader_depart:'工作室',
                describe:'网易云课堂，一个专注职业技能提升的在线学习平台网易云课堂，一个专注职业技能提升的在线学习平台',
                upload_time:'',         //时间戳
                reader_num:12
              },
              {
                imgList:[
                  'http://img5.imgtn.bdimg.com/it/u=4060543606,3642835235&fm=26&gp=0.jpg',
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
                  'http://img5.imgtn.bdimg.com/it/u=2189972113,381634258&fm=26&gp=0.jpg',
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
                  'http://img0.imgtn.bdimg.com/it/u=3775920962,3865889594&fm=11&gp=0.jpg',
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
                  'http://img2.imgtn.bdimg.com/it/u=1960548875,2286028701&fm=26&gp=0.jpg',
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
                  'http://img2.imgtn.bdimg.com/it/u=1521369611,1422301335&fm=26&gp=0.jpg',
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
                  'http://img3.imgtn.bdimg.com/it/u=3489002413,2559224910&fm=26&gp=0.jpg',
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
      methods:{
        goPreview(){
          wx.navigateTo({
            url:'../preview/main'
          })
        },
        _imgDivide(){             //将图片列表按索引分组  for瀑布流布局
          [this.cover.left,this.cover.right]=[this.contentLists.filter((item,index)=>index%2===0),this.contentLists.filter((item,index)=>index%2!==0)];
        }
      },
      created(){
        this._imgDivide();            //图片列表分组
      }
    }
</script>

<style scoped lang="scss">
  @import '../style/common.scss';
  .container{
    width: $full_width;
    margin-top: cr(61);
    padding: {
      left: 1%;
      right: 1%;
    }
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .content-left,.content-right{
      width: 49%;
    }
    .content-list{
      width: 100%;
      box-sizing: border-box;
      break-inside: avoid;
      font-size: cr(12);
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
        position: relative;
        &::after{
          position: absolute;
          bottom: 0;
          left: 0;
        }
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
        span{
          
        }
      }
    }
  }
</style>
