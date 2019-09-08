<template>
    <div class="container">
        <div class="title1">
            西安电子科技大学青年志愿者总队欢迎您的加入
        </div>
        <div class="join" @click="jumpIn">
            <div class="aa"></div>
            <div class="title">报名入口</div>
            <div class="content">点击进入本校志愿组织报名通道</div>
        </div>
    </div>
</template>
<script>
import {jumpTo} from '@/utils/wxFunc'
export default {
    methods:{
        jumpIn(){
            jumpTo('../enrollForm/main')
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    margin-top: 40rpx;
    display: flex;
    flex-direction: column;

    width: 100%;
    align-items: center;
}
.join{
    margin-top:120rpx;
    padding: 5rpx 40rpx;
    box-sizing: border-box;
    width: 692rpx;
    position: relative;
    height: 140rpx;
    border-radius: 15rpx;
    line-height: 60rpx;
    background-color: rgba(255, 255, 255, 0.5);
    color: #628E89;
    box-shadow: 1px 1px 1px 1px rgba(193, 193, 193, 1);
    border: 1px solid rgba(255, 255, 255, 0);
    font-size: 32rpx;
    .title{
        font-size: 40rpx;
        font-weight: 600;
    }
    .aa{
        position: absolute;
        height: 40rpx;
        width: 25rpx;
        border-radius: 15rpx 0 0 0;
        background: #98BFB2;
        left: 0;
        top: 0;
    }
}
.quanxian{
    margin-top: 60rpx;
    padding: 5rpx 40rpx;
    box-sizing: border-box;
    width: 692rpx;
    position: relative;
    height: 385rpx;
    border-radius: 15rpx;
    line-height: 60rpx;
    background-color: rgba(255, 255, 255, 0.5);
    color: #628E89;
    box-shadow: 1px 1px 1px 1px rgba(193, 193, 193, 1);
    border: 1px solid rgba(255, 255, 255, 0);
    font-size: 32rpx;
    .title{
        font-size: 40rpx;
        font-weight: 600;
    }
    .aa{
        position: absolute;
        height: 40rpx;
        width: 25rpx;
        border-radius: 15rpx 0 0 0;
        background: #98BFB2;
        left: 0;
        top: 0;
    }
    .content{
        line-height: 80rpx;
    }
}
.bottom{
    margin-top: 40rpx;
    padding: 5rpx 40rpx;
    box-sizing: border-box;
    width: 692rpx;
    position: relative;
    height: 190rpx;
    border-radius: 15rpx;
    line-height: 60rpx;
    background-color: rgba(193, 193, 193, 1);
    color: white;
    box-shadow: 1px 1px 1px 1px rgba(193, 193, 193, 1);
    border: 1px solid rgba(255, 255, 255, 0);
    font-size: 32rpx;
    .title{
        font-size: 40rpx;
        font-weight: 600;
    }
    .aa{
        position: absolute;
        height: 40rpx;
        width: 25rpx;
        border-radius: 15rpx 0 0 0;
        background: #98BFB2;
        left: 0;
        top: 0;
    }
}
.title1{
    font-weight: bolder;
    line-height: 75rpx;
    font-size: 48rpx;
    margin: 0rpx 60rpx;
    text-align: center; 
    color: #628E89;
    margin-top: 40rpx;
}
</style>
