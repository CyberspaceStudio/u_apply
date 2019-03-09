<template>
    <div class="container">
        <div class="info">
            2个新的志愿者徽章
        </div>
    </div>
</template>
<script>
export default {
    data() {

    },
    methods() {

    }
}
</script>
<style lang="scss" scoped>
.container{
    @include flex_row;
    justify-content: center;
}
.info{
    @include config_width_height(400rpx,76rpx);
    line-height: 76rpx;
    text-align: center;
    margin-top: 50rpx;
    border-radius: 38rpx;
    font-size: 28rpx;
    color: #FB9500;
    border: 2rpx solid #FB9500;
    box-shadow: 2rpx 2rpx 2rpx 0;
}
</style>
