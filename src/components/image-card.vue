<template>
    <div class="card">
        <div class="card-img">
            <img :src="url" mode="aspectFill" class="card-img-content" />
            <footer class="right-foot">4张</footer>
        </div>
        <article class="card-text">今天可真是开心啊哈得到的哈哈</article>
        <footer class="card-footer">
            <span class="card-footer-time">一天前</span>
            <span class="people"><img class="check" src="/static/images/icons/check.png"/>10人</span>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            url:'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eosdiajyuSvmwAhLsOuuOFJHPpP935Z9ETHKWZnKl2WibMdEwwhJfO0yF9eic1t9H3FqcjLwAdeIuhibg/132'
        }
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
.card{
    margin-top: 15rpx;
    @include flex_column;
    align-items: center;
    width: 340rpx;
    &-img{
        position: relative;
        &-content{
            @include config_width_height(340rpx,320rpx);
            border-radius: 12rpx 12rpx 0 0 ;
        }
        .right-foot{
            position: absolute;
            @include config_width_height(62rpx,42rpx);
            bottom: 13rpx;
            right: 0;
            background: black;
            opacity: 0.47;
            color: white;
            font-size: 28rpx;
            line-height: 42rpx;
            text-align: center;
        }
    }
    &-text{
        font-size: 28rpx;
        width: 316rpx;
        line-height: 40rpx;
    }
    &-footer{
        font-size: 28rpx;
        @include flex_row;
        justify-content: space-between;
        margin-top: 10rpx;
        width: 316rpx;
        color: #807C7C;
        .check{
            @include config_width_height(34rpx,34rpx);
        }
        .people{
            @include flex_row;
            align-items: center;
        }
    }
}
</style>

