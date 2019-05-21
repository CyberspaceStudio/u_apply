<template>
    <div class="application">
        <title class="application-title">我的应用</title>
        <article class="container">
            <div class="application-card"> 
                <img  class="application-card-icon" v-if="imgUrl" :src="imgUrl+'lookup.png'"/>
                <span>招新数据</span>
            </div>
            <div class="application-card"> 
                <img  class="application-card-icon" v-if="imgUrl" :src="imgUrl+'wishlist.png'"/>
                <span>招新面试</span>
            </div>
            <div class="application-card" @click="toEnroll"> 
                <img  class="application-card-icon" v-if="imgUrl" :src="imgUrl+'experience.png'"/>
                <span>招新报名</span>
            </div>
        </article>  
    </div>
</template>
<script>
import {jumpTo} from '@/utils/index'
import {postSign} from '@/apis/api'
export default {
    data() {
        return {
            imgUrl: this.GLOBAL.localImg
        }
    },
    methods:{
        toEnroll(){
            jumpTo('/pages/enrollForm/main')
        },
    },
}
</script>

<style lang="scss" scoped>
.application{
    &-title{
        font-size: 32rpx;
        margin: 30rpx 0 8rpx 68rpx;
    }
    .container{
        @include flex_row;
        margin: 8rpx auto;
        justify-content: space-around;
        align-items: center;
        @include config_width_height(690rpx,184rpx);
        box-shadow: 1rpx 1rpx 1rpx 1rpx;
        border-radius: 30rpx;
    }

    &-card{
        @include flex_column;
        align-items: center;
        font-size: 32rpx;
        &-icon{
            @include config_width_height(60rpx,60rpx);
            margin-bottom: 18rpx;
        }
    }
}
</style>
