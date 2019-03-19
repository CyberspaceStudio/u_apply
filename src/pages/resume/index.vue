<template>
    <div class="resume">
        <resume-header></resume-header>
        <score-toast v-if="isShow"></score-toast>
        <div></div>
        <div></div>
    </div>
</template>
<script>
import resumeHeader from '@/components/resume-header'
import scoreToast from '@/components/score-toast'
export default {
    data() {
        return {
            imgUrl: this.GLOBAL.localImg,
            isShow: true
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
</style>
