<template>
    <div class="info">
        <img :src="url" class="info-avater"/>
        <div class="info-infoArea">
            <div class="info-infoArea-first">
                <span class="info-infoArea-first-id">ID:abcdef</span>
                <span class="info-infoArea-first-name">野马swetamily</span>
            </div>
            <span class="info-infoArea-job">青年志愿者总队成员</span>
        </div>
        <img class="info-scanIcon" src="/static/images/icons/scan.png"/>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132'
        }
    }
}
</script>
<style lang="scss" scoped>
.info{
    margin-top: 18rpx;
    margin-left: 40rpx;
    font-size: 28rpx;
    @include flex_row;
    align-items: center;
    &-avater{
        @include config_width_height(160rpx, 160rpx);
        border-radius: 50%;
        background: yellow;
        margin-right: 40rpx;
    }
    &-infoArea{
        margin-right: 38rpx;
        &-first{
            max-width: 340rpx;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            margin-bottom: 15rpx;
            &-name{
                margin-left: 20rpx;
            }
        }
    }
    &-scanIcon{
        @include config_width_height(60rpx, 60rpx);
    }
}
</style>
