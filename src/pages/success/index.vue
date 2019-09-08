<template>
    <div class="container">
        <div class="container-toast">恭喜您报名成功！</div>
        <div>欢迎加入2019级青年志愿者总队，群聊号码：691142431</div>
        <img class="container-code" src="/static/images/icons/erweicode.jpg"/>
    </div>
</template>

<script>
import {secondDao} from '@/apis/api'
import {showToast,getStorageSync,jumpTo,showLoading,hideLoading}from '@/utils/index'
export default {
    data() {
        return {
            id:'',
            imgUrl: "http://132.232.37.121/teambition/",
            showSide: false,
            type:0
        }
    },
    methods: {
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
        }
    },
}
</script>

<style lang="scss" scoped>
.container{
    padding: 40rpx;
    line-height: 60rpx;
    text-align: center;
    &-toast{
        font-size: 60rpx;
        margin-bottom: 40rpx;
        color: #827F7F;
    }
    &-code{
        margin-top: 50rpx;
        height: 800rpx;
    }
}
</style>
