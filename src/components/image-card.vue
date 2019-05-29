<template>
<div class="card" @click="toPreview">
    <div class="card-img">
        <img :src="serverURI+infos.pictureUrl" mode="aspectFill" class="card-img-content" />
        <footer class="right-foot">4张</footer>
    </div>
    <article class="card-text">{{infos.content}}</article>
    <footer class="card-footer">
        <span class="card-footer-time">{{infos.activityTime}}</span>
        <span class="people"><img class="check" src="/static/images/icons/check.png"/>{{infos.readingVolume}}人</span>
    </footer>
</div>
</template>

<script>
import {jumpTo} from '@/utils/index'
export default {
    props: ['infos'],
    data() {
        return {
            serverURI:this.GLOBAL.serverURI
        }
    },
    methods: {
        toPreview(){
            jumpTo('/pages/preview/main',{
                id:this.infos.activityId
            })
        }
    },
    onLoad(){
        this.infos.activityTime=this.infos.activityTime.split(' ')[0];
    }
}
</script>

<style lang="scss" scoped>
.card {
    margin-top: 15rpx;
    @include flex_column;
    align-items: center;
    width: 340rpx;

    &-img {
        position: relative;

        &-content {
            @include config_width_height(340rpx, 320rpx);
            border-radius: 12rpx 12rpx 0 0;
        }

        .right-foot {
            position: absolute;
            @include config_width_height(62rpx, 42rpx);
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

    &-text {
        font-size: 28rpx;
        width: 316rpx;
        height: cr(40);
        line-height: 40rpx;
    }

    &-footer {
        font-size: 28rpx;
        @include flex_row;
        justify-content: space-between;
        margin-top: 10rpx;
        width: 316rpx;
        color: #807C7C;

        .check {
            @include config_width_height(34rpx, 34rpx);
        }

        .people {
            @include flex_row;
            align-items: center;
        }
    }
}
</style>
