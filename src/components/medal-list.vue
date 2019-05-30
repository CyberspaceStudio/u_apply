<template>
    <div class="item">
        <div class="item-content">
            <div class="item-content-left">
                <span class="item-content-left-text">{{data.content}}</span>
                <footer class="item-content-footer">
                    <span>{{data.activityTime}}</span>
                    <div><img src="/static/images/icons/check.png"/> {{data.readingVolume}}人</div>
                </footer>
            </div>
            <aside class="item-content-right">
                <img :src='serverURI+data.pictureUrl' class="spec-img">
            </aside>
        </div>
        <footer class="item-footer" @click="showToast(data.activityId)">
            <span></span>
            <span>查看赠友列表</span>
        </footer>
    </div>
</template>
<script>
export default {
    props:['data'],
    data() {
        return {
            serverURI:this.GLOBAL.serverURI
        }
    },
    methods: {
        showToast(id) {
            this.$emit('showToast',id)
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
            @include config_width_height(296rpx,224rpx);
            border-radius: 3rpx;
        }
        &-footer{
            margin-top: 16rpx;
            width: 80%;
            @include flex_row;
            justify-content: space-between;
            color: #807C7C;
            div{
                @include flex_row;
                align-items: center;
                img{
                    @include config_width_height(34rpx,34rpx);
                    margin-right: cr(4);
                }
            }
        }
    }
    &-footer{
        @include flex_row;
        width: 70%;
        margin: 8rpx 30rpx;
        justify-content: space-between;
    }
}
.spec-img{
    width: 100%;
    height: 100%;
}
</style>
