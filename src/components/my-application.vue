<template>
    <div class="application">
        <title class="application-title">我的应用</title>
        <article class="container">
            <div class="application-card" @click="tosex"> 
                <img  class="application-card-icon" v-if="imgUrl" :src="imgUrl+'lookup.png'"/>
                <span>部门招新数据</span>
            </div>
            <div class="application-card" @click="toWholeInter"> 
                <img  class="application-card-icon" v-if="imgUrl" :src="imgUrl+'experience.png'"/>
                <span>面试数据</span>
            </div>
            <div class="application-card" @click="view"> 
                <img  class="application-card-icon" v-if="imgUrl" :src="imgUrl+'wishlist.png'"/>
                <span>招新面试</span>
            </div>
            <div class="application-card" @click="toDepTotal"> 
                <img  class="application-card-icon" v-if="imgUrl" :src="imgUrl+'wishlist.png'"/>
                <span>总队招新数据</span>
            </div>
        </article>  
    </div>
</template>
<script>
import {jumpTo,showToast} from '@/utils/index'
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
        tosex(){
            jumpTo('/pages/sexnumber/main')
        },
        view(){
            jumpTo('/pages/interview/main')
        },
        toDepTotal(){
            jumpTo('/pages/statistics/main')
        },
        toWholeInter(){
            jumpTo('/pages/thenumber/main')
        }
    }
}
</script>

<style lang="scss" scoped>
.application{
    margin-top: 30rpx;
    &-title{
        font-size: 32rpx;
        margin: 30rpx 0 8rpx 68rpx;
    }
    .container{
        @include flex_row;
        margin: 8rpx auto;
        padding-left: 75rpx;
        box-sizing: border-box;
        align-items: center;
        flex-flow: wrap;
        @include config_width_height(690rpx,360rpx);
        box-shadow: 1rpx 1rpx 1rpx 1rpx;
        border-radius: 30rpx;
        margin-top: 20rpx;
    }

    &-card{
        @include flex_column;
        align-items: center;
        font-size: 30rpx;
        margin-right: 55rpx;
        &-icon{
            @include config_width_height(60rpx,60rpx);
            margin-bottom: 18rpx;
        }
    }
}
</style>
