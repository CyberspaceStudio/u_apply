<template>
    <div class="resume-info">
            <img class="resume-info-avater" v-if="imgUrl" :src="imgUrl+'11.JPG'"/>
            <aside>
                <div>
                    <span>{{info.realName}}</span>
                    <span>{{info.sex}}</span>
                </div>
                <span class="resume-info-right">
                    <img class="resume-info-right-icon" v-if="imgUrl" :src="imgUrl+'telephone2.png'"/>
                    <span>{{info.telNo}}</span>
                </span>
                <span class="resume-info-right">
                    <img  class="resume-info-right-icon"  v-if="imgUrl" :src="'/static/images/icons/'+'QQ.png'"/>
                    <span>{{info.wechat}}</span>
                </span>
            </aside>
        </div>
</template>
<script>
export default {
    props:["info"],
    data() {
        return {
            imgUrl: this.GLOBAL.localImg,
        }
    }
}
</script>
<style lang="scss" scoped>
.resume-info{
        @include flex_row;
        align-items: center;
        &-avater{
            @include config_width_height(160rpx,160rpx);
            border-radius: 50%;
            margin-right: 50rpx;
        }
        &-right{
            @include flex_row;
            align-items: center;
            margin-top: 15rpx;
            &-icon{
                @include config_width_height(60rpx,60rpx);
                margin-right: 18rpx;
            }
        }
        aside{
            @include flex_column;
            div{
                span{
                    margin-right: 68rpx;
                }
            }
        }
    }
</style>
