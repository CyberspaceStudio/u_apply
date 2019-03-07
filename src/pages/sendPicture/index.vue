<template>
    <div class="sendPicture">
        <div class="sendPicture-box">
            <textarea class="sendPicture-box-text" placeholder="分享志愿心（20字以内）..."   maxlength="20"></textarea>
        </div>
        <button class="sendPicture-config">上传</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.sendPicture{
    padding: 26rpx 23rpx;
    &-box{
        height: 754rpx;
        border-radius: 8rpx 8rpx 8rpx 8rpx;
        color: rgba(16, 16, 16, 1);
        font-size: 28rpx;
        border: 4rpx dashed  rgba(174, 193, 181, 1);
        display: flex;
        justify-content: center;
        padding-top: 30rpx;
        &-text{
            height: 150rpx;
            font-size: 36rpx;
        }
    }
    &-config{
        width: 248rpx;
        background: #7EAD9D;
        margin-top: 150rpx;
        color: white;
    }
}
</style>
