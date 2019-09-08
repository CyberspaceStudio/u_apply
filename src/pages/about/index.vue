<template>
    <div class="container">
        <div>欢迎加入2019级青年志愿者总队，群聊号码：691142431</div>
        <img class="container-code" :src="imgUrl" @click='openImage'/>
        <button class="bnt" @click="copy">点 击 复 制 群 号</button>
    </div>
</template>

<script>
import {secondDao} from '@/apis/api'
import {showToast,getStorageSync,jumpTo,showLoading,hideLoading, previewImage}from '@/utils/index'
export default {
    data() {
        return {
            id:'',
            imgUrl: "http://m.qpic.cn/psb?/V14KNPy61uV5DA/o6qs3aZNKJADO0RT1vll9uuF6.aI45itSIq9vPAR8xo!/b/dDUBAAAAAAAA&bo=HALkAgAAAAARB8g!&rf=viewer_4",
            showSide: false,
            type:0
        }
    },
    methods: {
      openImage() {
        previewImage(
          [this.imgUrl],
          this.imgUrl
        )
      },
       input_id(){
            this.type = 0;
            this.showSide = true;
       },
       async submit(){
            if(this.type == 0){
                this.showSide = false;
                jumpTo(`/pages/resume/main?id=${this.id}`);
                this.id = "";
            }
            else{
                await secondDao({mainId:this.id}).catch((err)=>{
                    console.log(err);
                    showToast('请求失败，请重试!')
                    throw new Error('error');
                })
                showToast('签到成功！','success');
                this.type = 1;
                this.showSide = false;
                this.id = "";
            }
       },
        hide(){
            this.showSide = false
        },
        show() {
            this.showSide = true;
        },
        secondList(){
            this.type = 1;
            this.showSide = true;
        },
        copy(){
            wx.setClipboardData({
                data: '691142431',
                success: function (res) {
                    showToast('群号复制成功','success');
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.container{
    padding: 30rpx;
    line-height: 60rpx;
    text-align: center;
    @include flex_column;
    &-toast{
        font-size: 60rpx;
        margin-bottom: 40rpx;
        color: #827F7F;
    }
    &-code{
        margin-top: 40rpx;
        width: 94%;
        height: 800rpx;
    }
}
.bnt{
    background: #7EAD9D;
    color: white;
    margin-top: 30rpx;
    width: 75%;
    border-radius: 15rpx;
    border: none;
}
</style>
