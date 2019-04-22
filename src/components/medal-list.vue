<template>
    <div class="item">
        <div class="item-content">
            <div class="item-content-left">
                <span class="item-content-left-text">欢迎关注和使用墨刀原型快速解决原型问题</span>
                <span class="item-content-left-new">新增奖章2枚</span>
                <footer class="item-content-footer">
                    <span>刚刚</span>
                    <div><img src="/static/images/icons/check.png"/> 10人</div>
                </footer>
            </div>
            <aside class="item-content-right"></aside>
        </div>
        <footer class="item-footer" @click="showToast">
            <span>奖章数 12</span>
            <span>查看赠友列表</span>
        </footer>
    </div>
</template>
<script>
import bottomToast from '@/components/medal-list'
export default {
    data() {

    },
    components: {
        bottomToast
    },
    methods: {
        showToast() {
            this.$emit('showToast')
        }
    }
}
</script>
<style lang="scss" scoped>
.item{
    @include config_width_height(704rpx, 334rpx);
    background: #EFF2F5;
    margin: 56rpx auto;
    border-radius: 20rpx;
    font-size: 28rpx;
    @include flex_column;
    &-content{
        border-radius: 10rpx;
        @include flex_row;
        justify-content: space-between;
        align-items: center;
        margin: 14rpx;
        padding: 14rpx;
        background: white;
        &-left{
            width: 308rpx;
            @include flex_column;
            &-text{
                line-height: 50rpx;
                margin-bottom: 14rpx;
            }
            &-new{
                color: #8A8888;
            }
        }
        &-right{
            background: red;
            @include config_width_height(296rpx,224rpx);
            border-radius: 3rpx;
        }
        &-footer{
            margin-top: 16rpx;
            @include flex_row;
            justify-content: space-between;
            color: #807C7C;
            div{
                @include flex_row;
                align-items: center;
                img{
                    @include config_width_height(34rpx,34rpx);
                }
            }
        }
    }
    &-footer{
        @include flex_row;
        margin: 8rpx 30rpx;
        justify-content: space-between;
    }
}
</style>
