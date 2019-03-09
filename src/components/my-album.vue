<template>
    <div class="album">
        <title>我的相册</title>
        <div class="album-content">
            <image-card></image-card>
            <image-card></image-card>
            <image-card></image-card>
        </div>
    </div>
</template>
<script>
import imageCard from '@/components/image-card'
export default {
    components:{
        imageCard
    }
}
</script>
<style lang="scss" scoped>
.album{
    margin-top: 24rpx;
    title{
        margin-left: 68rpx;
        font-size: 32rpx;
    }
    &-content{
        margin-top: 6rpx;
        padding: 0 26rpx;
        display: flex;
        @include flex_row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
</style>
