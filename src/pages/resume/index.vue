<template>
    <div>
        <div class="resume">
            <resume-header></resume-header>
            <score-toast v-if="isShow"></score-toast>
            <div class="wantApp">
                <span class="wantApp-title">
                    <img class="wantApp-img" v-if="imgUrl" :src="imgUrl+'wishList.png'"/>
                    <span>意向部门</span>
                </span>
                <ul class="wantApp-content">
                    <li>
                        <span class="wantApp-content-title">第一志愿</span>
                        <span>活动部</span>
                    </li>
                    <li>
                        <span class="wantApp-content-title">第二志愿</span>
                        <span>活动部</span>
                    </li>
                    <li>
                        <span class="wantApp-content-title">第三志愿</span>
                        <span>活动部</span>
                    </li>
                </ul>
            </div>
            <div class="description">
                <span class="wantApp-title">
                    <img class="wantApp-img" v-if="imgUrl" :src="imgUrl+'experience.png'"/>
                    <span>自我描述</span>
                </span>
                <div class="description-content">
                    牛逼
                </div>
            </div>
        </div>
    <button>打分</button>
    </div>

</template>
<script>
import resumeHeader from '@/components/resume-header'
import scoreToast from '@/components/score-toast'
export default {
    data() {
        return {
            imgUrl: this.GLOBAL.localImg,
            isShow: false
        }
    },
    components: {
        resumeHeader,
        scoreToast
    },
    methods: {
        change() {
            console.log(this.isShow)
            this.isShow = !this.isShow;
        }
    }
}
</script>
<style lang="scss" scoped>
.resume{
    margin: 0 20rpx;
    padding: 50rpx 68rpx;
    border-radius: 20rpx;
    font-size: 28rpx;
    border: 4rpx solid rgba(175, 189, 172, 1);
}
.wantApp{
    border-top: 9rpx solid rgba(175, 189, 172, 1);
    border-bottom: 9rpx solid rgba(175, 189, 172, 1);
    margin-top: 30rpx;
    padding: 30rpx 15rpx;
    &-img{
        height: 50rpx;
        width: 50rpx;
        margin-right: 20rpx;
    }
    &-title{
        display: flex;
        align-items: center;
        font-size: 30rpx;
    }
    &-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 50rpx;
        margin-top: 15rpx;
        &-title{
            margin-right: 40rpx;
        }
    }
}
.description{
    padding: 30rpx 15rpx;
    &-content{
        min-height: 200rpx;
        margin-top: 25rpx;
    }
}
button{
    color: white;
    font-size: 35rpx;
    margin-top: 70rpx;
    width: 300rpx;
    background: rgba(175, 189, 172, 1);
}
</style>
