<template>
    <div class="container">
        <div class="toast" v-if="showSide">
            <div class="toast-back change-color" @click="hide"></div>
            <div class="toast-menu animation-up">
                <div class="initmodel">
                    <input v-model="id" class="idInput" placeholder="请输入报名ID"/>
                    <img class="close" v-if="imgUrl" :src="imgUrl+'shut-down.png'" @click="hide"/>
                    <button class="bnt_submit" @click="submit">确认</button>
                </div>
            </div>
        </div>
        <div class="box" @click="input_id">
            <div class="box-title">
                新生一面简历获取
            </div>
            <div class="box-content">
                <img src='/static/images/icons/resume.png' class="box-pic">
                <span>输入新生ID获取个人简历</span>
            </div>
        </div>
        <div class="box"  @click='secondList'>
            <div class="box-title">
                新生二面签到
            </div>
            <div class="box-content">
                <img src='/static/images/icons/resume.png' class="box-pic">
                <span>输入新生ID获取个人简历</span>
            </div>
        </div>
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
    padding: 40rpx 80rpx;
    .box{
        height: 400rpx;
        border: 2rpx #98BFB2 solid;
        border-radius: 20rpx;
        margin-top: 60rpx;
        &-title{
            font-size: 28rpx;
            text-align: center;
            margin-top: 10rpx;
            color: #827F7F;
        }
        &-pic{
            height: 180rpx;
            width: 180rpx;
            margin: 50rpx 0;
        }
        &-content{
            font-size: 32rpx;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #827F7F;
        }
    }
}
.idInput{
    margin: 50rpx;
    background: white;
    border: 1rpx #98BFB2 solid;
    border-radius: 10rpx;
    padding-left: cr(8);
    box-sizing: border-box;
    font-size: cr(12);
}
.bnt_submit{
    width: 70%;
    color: #98BFB2;
}
.initmodel{
    padding: 10rpx;
    position: relative;
    background: white;
    margin-bottom: 20rpx;
    .close{
        position: absolute;
        right: 10rpx;
        top: 10rpx;
        height: 40rpx;
        width: 40rpx;
    }
}

.change-color {
  opacity: 0.7;
  animation: change-to-black 0.1s linear;
}
@keyframes change-to-black {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.7;
  }
}

.animation-up {
  opacity: 1;
  animation: bottom-toast-up 0.1s linear;
}

@keyframes bottom-toast-up {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.toast{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.4);
    z-index: 999;
    &-menu{
        position: fixed;
        width: 75vw;
        background: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 15rpx;
    }
    &-back{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: black;
        opacity:0.6;
        z-index: -1
    }
}
</style>
