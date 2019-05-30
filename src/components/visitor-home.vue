<template>
    <div class="container">
        <div class="join" @click="jumpIn">
            <div class="aa"></div>
            <div class="title">普通游客权限</div>
            <div class="content">浏览志愿圈图集</div>
            <div class="content">点此处报名</div>
        </div>
        <div class="quanxian">
            <div class="aa"></div>
            <div class="title">志愿圈成员权限</div>
            <div class="content">发布志愿图集</div>
            <div class="content">查看部门图集</div>
            <div class="content">添加图集发布者微信</div>
            <div class="content">查看其他志愿者图集</div>
        </div>
        <div class="bottom">
            <div class="title">加入志愿圈</div>
            <div class="content">以志愿组织的形式注册成为志愿圈成员详情请访问 www.zhiyuanquan.com </div>
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
    padding: 5rpx 40rpx;
    box-sizing: border-box;
    width: 692rpx;
    position: relative;
    height: 190rpx;
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
    margin-top: 40rpx;
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
</style>
