<template>
<div class="main-wrap">
    <div class="like-nav">
        <div class="like-state" v-if='!isliked'>
            <img src='/static/images/icons/bigger-medal.png' @click='setLike'>
            <span>点击图标可授予TA志愿奖章</span>
        </div>
        <div class="like-state" v-if='isliked' @click="cancelLike">
            <img src='/static/images/icons/liked.png'>
            <span>已授予TA志愿奖章</span>
        </div>
        <span>{{atlas.activityTime}}</span>
    </div>
    <swiper next-margin='25px' class="swiper-wrap" @change='change'>
        <swiper-item v-for='(item,index) in atlas.imgList' :key='index' class='swiper-item' @touchstart="touchStart" @touchmove='touchMove' @touchend='touchEnd'>
            <img :src="item" class="swiper-image">
            <div class='atlas-count'>{{index+1}}/{{atlas.imgList.length}}</div>
            <div class='atlas-intro'>{{atlas.content}}</div>
        </swiper-item>
    </swiper>
</div>
</template>

<script>
import {
    stampToDate
} from '@/utils/timeCount'
import {
    showToast
} from '@/utils/index'
import {
    getDepartPicture,checkStatus,like,unlike
} from '@/apis/api'

import {getStorageSync} from '@/utils/index'
export default {
    props:['atlas'],
    data() {
        return {
            isliked: false,
            touchStartPosition: 0, //滑动开始定位
            touchMoveLenght: 0, //滑动中手势位置追踪
            getTarget: false, //是否到达最后一张
            userId:0,
            atlas:null,
        }
    },
    computed: {
        /* getTrulyDate() {
            return stampToDate(this.atlas.upload_time)
        } */
    },
    methods: {
        _getImgList() {
            getDepartPicture({
                activityId: this.atlas.activityId
            }).then(res => {
                this.atlas.imgList = res.data.data;
            })
        },
        _getLikeStatus() {
            /* 
                用户mainId获取异常
            */
            checkStatus({
                userId: 2,
                activityId: this.atlas.activityId
            }).then(res => {
                if(res.data.data==='empty'){
                    this.isliked=false;
                }else if(res.data.data==='exits'){
                    this.isliked=true
                }
            })
        },
        touchStart(e) {
            this.touchStartPosition = e.clientX;
        },
        touchMove(e) {
            let _diff = e.clientX - this.touchStartPosition;
            this.touchMoveLenght = _diff;
        },
        touchEnd() {
            if (this.getTarget && this.touchMoveLenght < -40) {
                console.log('数据请求')
            }
        },
        setLike() {
            like({userId:this.userId,activityId:this.atlas.activityId}).then(res=>{
                this.isliked = true;
            })
        },//点赞
        cancelLike(){
            unlike({userId:this.userId,activityId:this.atlas.activityId}).then(res=>{
                this.isliked=false;
            })
        },//取消点赞
        _getUserId(){
            let result=getStorageSync('userInfo');
            this.userId = result.mainId;
        },
        change(e) {
            if (e.target.current === this.atlas.imgList.length - 1) {
                showToast('继续滑动切换下一图集');
                this.getTarget = true;
            } else {
                this.getTarget = false;
            }
        }
    },
    onLoad() {
        this._getUserId()
        this._getImgList()//获取图片列表
        this._getLikeStatus()//获取点赞状态  
        this.atlas.activityTime=this.atlas.activityTime.split(' ')[0];//后面取消
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
                width: 80%;
                position: absolute;
                bottom: 0;
                left: cr(10);
                border-radius: 0 0 cr(15) cr(15);
                background-color: rgba(0, 0, 0, .5);
                padding-left: cr(15);
                padding-right: cr(15);
            }
        }
    }
}
</style>
