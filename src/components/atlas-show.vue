<template>
<div class="main-wrap">
    <div class="like-nav" v-if='showLike'>
        <div class="like-state" v-if='!showLikeClick'>
            <img src='/static/images/icons/bigger-medal.png' @click='setLike'>
            <span>点击图标可授予TA志愿奖章</span>
        </div>
        <div class="like-state" v-if='showLikeClick' @click="cancelLike">
            <img src='/static/images/icons/liked.png'>
            <span>已授予TA志愿奖章</span>
        </div>
        <span>{{showTime}}</span>
    </div>
    <div class='self-album' v-else>
        <div class="likers">已经有{{likerNumber}}人点赞</div>
        <span>{{showTime}}</span>
    </div>
    <swiper next-margin='25px' class="swiper-wrap" @change='change'>
        <swiper-item v-for='(item,index) in imgList' :key='index' class='swiper-item' @touchstart="touchStart" @touchmove='touchMove' @touchend='touchEnd'>
            <img :src="serverURI+item" class="swiper-image" @click="preview(index)">
            <div class='atlas-count'>{{index+1}}/{{imgList.length}}</div>
            <div class='atlas-intro'>{{content}}</div>
        </swiper-item>
    </swiper>
</div>
</template>

<script>
import {
    stampToDate
} from '@/utils/timeCount'
import {
    showToast,previewImage
} from '@/utils/index'
import {
    getLikers,checkStatus
} from '@/apis/api'

import {getStorageSync} from '@/utils/index'
export default {
    props:['time','content','imgList','showLike','id'],
    data() {
        return {
            serverURI:this.GLOBAL.serverURI,
            touchStartPosition: 0, //滑动开始定位
            touchMoveLenght: 0, //滑动中手势位置追踪
            getTarget: false, //是否到达最后一张
            userId:0,
            showTime:'',
            likerNumber:0,
            isLiked:false,
        }
    },
    methods: {
        touchStart(e) {
            this.touchStartPosition = e.clientX;
        },
        touchMove(e) {
            let _diff = e.clientX - this.touchStartPosition;
            this.touchMoveLenght = _diff;
        },
        touchEnd() {
            if (this.getTarget && this.touchMoveLenght < -40) {
                // console.log('数据请求')
            }
        },
        preview(index){
            previewImage(this.imgList,this.imgList[index])
        },
        setLike() {
            this.$emit('like')
            this.$set( this ,'isLiked', true);
        },//点赞
        cancelLike(){
            this.$emit('cancelLike')
            this.$set( this ,'isLiked', false);
        },//取消点赞
        change(e) {
            if (e.target.current === this.imgList.length - 1) {
                // showToast('继续滑动切换下一图集');
                this.getTarget = true;
            } else {
                this.getTarget = false;
            }
        },
        _getUserInfo(){
            let res=getStorageSync('userInfo');
            return res.mainId;
        }
    },
    computed: {
        showLikeClick(){
            return this.isLiked
        }
    },
    onLoad() {
        this.showTime=this.time.split(' ')[0];
        if(!this.showLike){
            getLikers({
                activityId:this.id
            }).then(res=>{
                this.likerNumber=res.data.data
            })
        }
        checkStatus({
            userId:this._getUserInfo(),
            activityId:this.id
        }).then(res=>{
            if (res.data.data === 'empty') {
                this.$set( this ,'isLiked', false);
            } else if (res.data.data === 'exists') {
                this.$set( this ,'isLiked', true);
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.main-wrap {
    width: 100%;
    @include flex_column;
    align-items: center;
    margin-top: cr(20);

    .like-nav {
        width: 100%;
        height: cr(60);
        font-size: cr(12);
        color: #8C8888;
        font-weight: 400;
        @include flex_row;
        justify-content: space-between;
        padding-right: cr(25);
        box-sizing: border-box;

        .like-state {
            @include flex_row;
            align-items: center;
            padding-left: cr(20);
            box-sizing: border-box;

            img {
                width: cr(20);
                height: cr(20);
                margin-right: cr(6);
            }
        }

        span {
            line-height: cr(60);
        }
    }
    .self-album{
        width: 80%;
        height: cr(60);
        justify-content: space-between;
        font-size: cr(12);
        color: #8C8888;
        font-weight: 400;
        @include flex_row;
        >div{
            @include flex_row;
        }
    }

    .swiper-wrap {
        width: 100%;
        height: cr(250);
        margin-top: cr(50);

        .swiper-item {
            color: white;
            font-size: cr(12);
            padding-left: cr(10);
            padding-right: cr(10);
            box-sizing: border-box;

            img {
                width: 100%;
                height: 100%;
                border-radius: cr(15);
            }

            .atlas-count {
                width: cr(25);
                text-align: center;
                position: absolute;
                top: 0;
                right: cr(20);
                background-color: rgba(0, 0, 0, .5);
            }

            .atlas-intro {
                position: absolute;
                bottom: 0;
                left: cr(10);
                right: cr(10);
                border-radius: 0 0 cr(15) cr(15);
                background-color: rgba(0, 0, 0, .5);
                padding-left: cr(15);
                padding-right: cr(15);
                box-sizing: border-box;
            }
        }
    }
}
</style>
